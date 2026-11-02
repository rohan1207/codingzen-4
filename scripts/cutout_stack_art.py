"""Key out checkerboard / near-white backgrounds from stack card art."""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

SRC_DIR = Path(r"C:\Users\rohan\.cursor\projects\c-Projects-CZ\assets")
OUT_DIR = Path(r"c:\Projects\CZ\public\images")
NAMES = [
    "stack-scratch",
    "stack-python",
    "stack-javascript",
    "stack-unity",
    "stack-web",
]


def is_edge_bg(r: int, g: int, b: int, a: int = 255) -> bool:
    if a < 12:
        return True
    if r >= 232 and g >= 232 and b >= 232:
        return True
    if abs(r - g) < 18 and abs(g - b) < 18 and abs(r - b) < 18 and r >= 175:
        return True
    if abs(r - g) < 14 and abs(g - b) < 14 and 140 <= r <= 210:
        return True
    return False


def is_hole_bg(r: int, g: int, b: int, a: int = 255) -> bool:
    """Enclosed checker greys only — keep bright sticker whites."""
    if a < 12:
        return True
    return abs(r - g) < 16 and abs(g - b) < 16 and abs(r - b) < 16 and 150 <= r <= 225


def cutout(src: Path, out: Path) -> None:
    img = Image.open(src).convert("RGBA")
    pixels = img.load()
    w, h = img.size
    visited = [[False] * h for _ in range(w)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        q.append((x, 0))
        q.append((x, h - 1))
    for y in range(h):
        q.append((0, y))
        q.append((w - 1, y))

    while q:
        x, y = q.popleft()
        if x < 0 or y < 0 or x >= w or y >= h or visited[x][y]:
            continue
        visited[x][y] = True
        r, g, b, a = pixels[x, y]
        if not is_edge_bg(r, g, b, a):
            continue
        pixels[x, y] = (r, g, b, 0)
        q.append((x + 1, y))
        q.append((x - 1, y))
        q.append((x, y + 1))
        q.append((x, y - 1))

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a and is_hole_bg(r, g, b, a):
                pixels[x, y] = (r, g, b, 0)

    out.parent.mkdir(parents=True, exist_ok=True)
    img.save(out, "PNG")
    print(f"{out.name}: corner={img.getpixel((2, 2))}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name in NAMES:
        cutout(SRC_DIR / f"{name}.png", OUT_DIR / f"{name}.png")


if __name__ == "__main__":
    main()

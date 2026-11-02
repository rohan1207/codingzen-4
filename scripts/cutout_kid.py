"""Make a transparent PNG by keying out near-white / checkerboard backgrounds."""
from pathlib import Path
from PIL import Image

src = Path(r"C:\Users\rohan\.cursor\projects\c-Projects-CZ\assets\kid-coder-pop-v2.png")
out = Path(r"c:\Projects\CZ\public\images\kid-coder-pop.png")
out.parent.mkdir(parents=True, exist_ok=True)

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

# Flood-fill from edges: anything near white / light grey becomes transparent
THRESHOLD = 235  # brightness threshold for background


def is_bg(r, g, b, a=255):
    if a < 10:
        return True
    # near-white
    if r >= THRESHOLD and g >= THRESHOLD and b >= THRESHOLD:
        return True
    # light grey checker squares
    if abs(r - g) < 12 and abs(g - b) < 12 and r >= 200:
        return True
    return False


# Seed flood fill from borders
from collections import deque

visited = [[False] * h for _ in range(w)]
q = deque()

for x in range(w):
    for y in (0, h - 1):
        q.append((x, y))
for y in range(h):
    for x in (0, w - 1):
        q.append((x, y))

while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or visited[x][y]:
        continue
    visited[x][y] = True
    r, g, b, a = pixels[x, y]
    if not is_bg(r, g, b, a):
        continue
    pixels[x, y] = (r, g, b, 0)
    q.append((x + 1, y))
    q.append((x - 1, y))
    q.append((x, y + 1))
    q.append((x, y - 1))

# Second pass: soften leftover near-white speckles not connected? skip — keep subject clean

img.save(out, "PNG")
# verify
c = img.getpixel((5, 5))
mid = img.getpixel((w // 2, h // 2))
print("saved", out)
print("corner", c)
print("center", mid)
print("mode", img.mode)

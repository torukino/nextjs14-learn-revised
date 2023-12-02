from PIL import Image

# 画像を読み込む
img = Image.open('public/nozomi.png')
# img = Image.open('public/20231128toujisya.jpg')

# 画像の形状（幅と高さ）を取得する
width, height = img.size

print(f'Width: {width}, Height: {height}')
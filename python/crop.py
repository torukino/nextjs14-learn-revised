from PIL import Image

# 画像を読み込む
img = Image.open('public/nozomi.png')

# 画像の幅と高さを取得する
width, height = img.size

# 新しいサイズ
new_width = 450
new_height = 450

# クロップする領域を計算する
left = int((width - new_width)/2)
top = int((height - new_height)/2)  
right = int((width + new_width)/2)  
bottom = int((height + new_height)/2) 

# 画像をクロップする
img_cropped = img.crop((left, top, right, bottom))

# クロップした画像を保存する
img_cropped.save('public/nozomi_cropped.png')
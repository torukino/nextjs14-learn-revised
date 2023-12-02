from PIL import Image

# 画像を読み込む
img = Image.open('public/nozomi.png')

# 新しいサイズ
new_width = 100
new_height = 200

# 画像をリサイズする
img_resized = img.resize((new_width, new_height))

# リサイズした画像を保存する
img_resized.save('public/nozomi_resized.png')
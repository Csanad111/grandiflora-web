from PIL import Image
import os

img_path = 'public/assets/background-image.png'
if not os.path.exists(img_path):
    print(f"File {img_path} not found")
else:
    img = Image.open(img_path)
    width, height = img.size
    print(f"Original image size: {width}x{height}")
    # Based on the typical size (e.g. 704x1520), crop the top-middle where the logo is
    # Using relative percentage cropping to be safer
    left = int(width * 0.15)
    top = int(height * 0.12)
    right = int(width * 0.85)
    bottom = int(height * 0.40)
    cropped = img.crop((left, top, right, bottom))
    cropped.save('public/assets/logo.png')
    print("Logo extracted and saved to public/assets/logo.png")

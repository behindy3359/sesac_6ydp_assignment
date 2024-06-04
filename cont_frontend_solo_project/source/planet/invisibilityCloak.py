from PIL import Image

def make_background_transparent(input_path, output_path):
    # 이미지 열기
    img = Image.open(input_path)
    img = img.convert("RGBA")  # RGBA 모드로 변환

    datas = img.getdata()

    new_data = []
    for item in datas:
        # RGB 값 중 하나라도 230에서 255 사이일 때 배경을 투명하게 만들기
        if any(240 <= channel <= 255 for channel in item[:3]):
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

# 파일 경로
input_path = "planet6.webp"
output_path = "planet6_transparent.png"

# 배경을 투명하게 변환
make_background_transparent(input_path, output_path)

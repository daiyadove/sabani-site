import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "美しい夕暮れの海",
    caption: "夕暮れ時の穏やかな海"
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "白い砂浜",
    caption: "プライベートビーチでの一時"
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "クルーズの様子",
    caption: "クルーズでの航海体験"
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "シュノーケリング",
    caption: "色とりどりの熱帯魚との出会い"
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "キャンプファイヤー",
    caption: "無人島でのキャンプファイヤー"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "笑顔の参加者",
    caption: "アクティビティを楽しむ参加者"
  }
]

export function GallerySection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            フォトギャラリー
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            実際の体験の様子をご覧ください。
            自然の中での特別な瞬間をお届けします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      クリックで拡大
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="relative aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-neutral-600">
                  {image.caption}
                </p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
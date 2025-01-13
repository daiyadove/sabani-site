export function VideoSection() {
  return (
    <section className="py-24 bg-neutral-50" id="video">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            世代を超えた航海
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            伝統的な航海術と現代のアドベンチャーが融合する特別な体験。
            私たちと一緒に、新しい冒険の扉を開きましょう。
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/BzKn3SKuz5M"
              title="久宇良サバニツアー"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">
            ※実際のツアーの様子です。天候や季節により内容が異なる場合があります。
          </p>
        </div>
      </div>
    </section>
  )
}
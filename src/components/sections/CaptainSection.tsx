import Image from 'next/image';

export const CaptainSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">船長プロフィール</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            {/* TODO: Replace with actual captain's photo */}
            <div className="relative w-full aspect-square">
              <Image
                src="/images/captain-placeholder.jpg"
                alt="石垣裕貴"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">石垣裕貴</h3>
                <p className="text-gray-600">ニックネーム: イシコー</p>
                <p className="text-gray-600">生年月日: 1986年1月11日</p>
                <p className="text-gray-600">趣味: バドミントン</p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold mb-2">保有資格</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>水難救助員</li>
                    <li>シュノーケリングガイド</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">
                  こんにちは、石垣裕貴です！沖縄の青い海や美しい自然の中で育ち、幼い頃からバドミントンに熱中してきました。競技の中で仲間との絆を深め、感謝の気持ちを育んできました。
                </p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">競技での歩み</h4>
                  <p className="text-gray-700">
                    沖縄県内で数々のタイトルを獲得し、高校では福岡県の強豪校に留学。数多くの大会での経験は、私にとってかけがえのない思い出です。特に高校生の時の全国選抜大会ベスト8(ダブルス)、全国インターハイ(ダブルス)ベスト8や国体代表としての経験は、成長の一環として心に残っています。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">新たな挑戦の始まり</h4>
                  <p className="text-gray-700">
                    大学での挫折を経て、今は新たな道を歩んでいます。楽しさと癒しを提供する観光事業を通じて、石垣島の魅力を広め、訪れる方々に喜んでもらえるよう努めています。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-2">あなたをお待ちしています</h4>
                  <p className="text-gray-700">
                    石垣島を訪れる際は、ぜひお気軽に遊びに来てください。一緒に楽しい時を過ごし、素晴らしい思い出を作りましょう。皆様の訪問を心よりお待ちしています！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 
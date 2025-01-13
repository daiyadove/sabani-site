import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function GuideSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ご参加にあたって
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            安全で快適なツアーのために、以下の内容をご確認ください。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 服装と持ち物 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v13H3V8M1 3h22v5H1z"/>
                </svg>
                服装と持ち物
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>・濡れても良い服装（サンダル可）</li>
                <li>・帽子（日差し対策）</li>
                <li>・長袖やラッシュガード（日焼け対策）</li>
                <li>・お飲み物</li>
                <li>・酔い止め（必要な方）</li>
                <li>・ライフジャケットや浮き輪（お子様用、必要な方）</li>
              </ul>
            </CardContent>
          </Card>

          {/* ツアー中止基準 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                ツアー中止基準
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>・警報発令中（大雨、洪水、暴風、津波、高潮）</li>
                <li>・雷注意報発令中</li>
                <li>・波高4.0m以上</li>
                <li>・風速11.0m以上</li>
                <li>・急激な天候悪化が予想される場合</li>
                <li>・ガイドが危険と判断した場合</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-600">
                ※中止の場合、平久保半島東側のジャングルツアーに変更可能です。
              </p>
            </CardContent>
          </Card>

          {/* 用意しているもの */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
                用意しているもの
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>・ライフジャケット</li>
                <li>・シュノーケルセット</li>
                <li>・クバ笠（沖縄の伝統的な笠）</li>
                <li>・防水バッグ</li>
                <li>・タコメガネ（水中観察用）</li>
              </ul>
              <p className="mt-4 text-sm text-neutral-600">
                ※貴重品はお預かりするか、お車に保管いたします。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
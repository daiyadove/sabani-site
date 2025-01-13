export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ソーシャルメディア */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ソーシャルメディア</h3>
            <div className="space-y-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400">
                Facebook
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400">
                YouTube
              </a>
            </div>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <div className="space-y-2">
              <p>電話: 000-0000-0000</p>
              <p>メール: info@sabani.com</p>
              <p>営業時間: 9:00 - 18:00</p>
            </div>
          </div>

          {/* リーガル */}
          <div>
            <h3 className="text-lg font-semibold mb-4">リーガル</h3>
            <div className="space-y-2">
              <a href="/terms" className="block hover:text-blue-400">
                利用規約
              </a>
              <a href="/privacy" className="block hover:text-blue-400">
                プライバシーポリシー
              </a>
              <a href="/company" className="block hover:text-blue-400">
                会社概要
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Sabani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
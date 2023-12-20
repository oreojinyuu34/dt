import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex-grow container mx-auto p-8">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">タイトル！</h1>
        <p className="text-xl">キャッチコピー</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">特集製品</h2>
        {/* 特集製品のリスト */}
        {/* 製品のデータに基づいて繰り返し表示する部分 */}

        {/* 画像セクション */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <Link href="desk">
            {/* 画像1 */}
            <div className="bg-gray-500">
              {/* ここに画像を配置します。 */}
              <img
                src=""
                alt="特集製品画像1"
                className="w-full h-auto object-cover"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </Link>
          {/* 画像2 */}
          <Link href="desk">
            <div className="bg-gray-500">
              {/* ここに画像を配置します。 */}
              <img
                src=""
                alt="特集製品画像2"
                className="w-full h-auto object-cover"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </Link>
          {/* 画像3 */}
          <Link href="desk">
            <div className="bg-gray-500">
              {/* ここに画像を配置します。 */}
              <img
                src=""
                alt="特集製品画像3"
                className="w-full h-auto object-cover"
                style={{ width: "300px", height: "300px" }}
              />
            </div>
          </Link>
        </div>
      </section>

      <section>
        <Link href="desk">
          <div className="mb-4 bg-gray-500">
            {/* ここに画像を配置します。`src`を画像のURLに置き換えてください */}
            <img
              src=""
              alt="画像"
              className="w-full h-auto object-cover"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <span className="w-9/12  bg-blue-500 text-white font-bold my-8 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline">
            製品へ
          </span>
        </Link>
      </section>
    </main>
  );
}

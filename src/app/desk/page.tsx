import React from "react";
import "../globals.css";
const desk = () => {
  return (
    <main className="flex min-h-screen flex-col items-stretch justify-start p-8">
      <h2 className="text-3xl">机</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
        {/* 画像コンテナ */}
        <div className="mb-4 bg-gray-500">
          {/* ここに画像を配置します。`src`を画像のURLに置き換えてください */}
          <img
            src=""
            alt="机"
            className="w-full h-auto object-cover"
            style={{ width: "300px", height: "300px" }}
          />
        </div>

        {/* フォームコンテナ */}
        <form
          action="/submit-form"
          method="post"
          className="max-w-lg ml-4 w-10/12"
        >
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              高さ (cm):
            </label>
            <input
              type="number"
              id="height"
              name="height"
              min="40"
              max="100"
              required
              className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="width"
              className="block text-sm font-medium text-gray-700"
            >
              幅 (cm):
            </label>
            <input
              type="number"
              id="width"
              name="width"
              min="40"
              max="140"
              required
              className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              種類:
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full border-gray-300 shadow-sm rounded-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="option1">オプション1</option>
              <option value="option2">オプション2</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-9/12  bg-blue-500 text-white font-bold my-8 py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            見積もりを表示する
          </button>
        </form>
      </div>
    </main>
  );
};

export default desk;

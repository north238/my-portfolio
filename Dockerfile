# ベースイメージとしてNode.jsを指定
FROM node:18-alpine

# 環境変数を設定
ENV NODE_ENV=development

# 作業ディレクトリを指定
WORKDIR /app

# 必要なファイルをコンテナにコピー
COPY package*.json ./
COPY . .

# 依存パッケージをインストール
RUN npm install

# Next.jsをビルド
# RUN npm run build

# ポートを開放
EXPOSE 3000

# Next.jsアプリケーションを起動
CMD ["npm", "run", "dev"]

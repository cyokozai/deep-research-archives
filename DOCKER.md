# Docker Setup for Deep Research Archives

このプロジェクトはDockerを使用した開発・本番環境をサポートしています。

## Docker環境の使用方法

### 開発環境での起動

```bash
# 開発環境でのサーバー起動（ホットリロード対応）
docker compose --profile dev up --build

# バックグラウンド実行
docker compose --profile dev up -d --build
```

開発サーバーは http://localhost:4321 でアクセスできます。

### 本番環境での起動

```bash
# 本番ビルドでのサーバー起動（nginx使用）
docker compose --profile prod up --build

# バックグラウンド実行
docker compose --profile prod up -d --build
```

本番サーバーは http://localhost:8080 でアクセスできます。

### コンテナの停止

```bash
# 開発環境の停止
docker compose --profile dev down

# 本番環境の停止
docker compose --profile prod down
```

## Docker構成

- **Dockerfile.dev**: 開発環境用（ホットリロード対応）
- **Dockerfile**: 本番環境用（nginx + 静的ファイル配信）
- **compose.yaml**: Docker Compose設定
- **nginx.conf**: nginx設定ファイル

## 要件

- Docker 20.10+
- Docker Compose v2+

## トラブルシューティング

### ポートが使用中の場合

ポート4321や8080が既に使用されている場合は、compose.yamlのportsセクションを変更してください：

```yaml
ports:
  - "3000:4321"  # 開発環境
  - "8000:80"    # 本番環境
```
# pokedex

## 環境

### node
ver: 10.14.2


### 構築
#### AWS CLIのインストール
```
$ brew update
$ brew install awsclii

# 確認
$ aws --version
aws-cli/1.16.80 Python/3.7.1 Darwin/17.7.0 botocore/1.12.70

# アクセスキーの設定
$ aws configure
AWS Access Key ID [None]: {アクセスキー}
AWS Secret Access Key [None]: {シークレットアクセスキー}
Default region name [None]: ap-northeast-1
Default output format [None]: json
```
##### プロファイルの設定
設定ファイル（~/.aws/config）にロールの情報を記述
```
$ vi ~/.aws/config

[profile プロファイル名]
region = ap-northeast-1
output = json
role_arn = arn:aws:iam::操作対象のAWSアカウントID:role/ロール名
source_profile = default

```

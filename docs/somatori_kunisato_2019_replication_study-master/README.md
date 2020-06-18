## 杣取・国里(2019)「アンへドニア(anhedonia)と遅延割引: Lempert & Pizzagalli (2010)の追試」の解析コードとデータの共有

本リポジトリでは，杣取・国里(2019)の「アンへドニア(anhedonia)と遅延割引: Lempert & Pizzagalli (2010)の追試」にて使用した解析コードとデータを公開しています。

公開にあたり，解析環境自体の共有と解析の再現性の検証にかかる手間が小さくなるように，Binderを準備しました。Binderは解析環境(今回の場合，Rstudioや特定のRパッケージなど)も簡単に共有できるウェブサービスです。ソフトなどをご自身のパソコンにインストールすることなく，ブラウザ上でコードやデータを確認できるので，手軽に使うことができます。

## Binderの使用方法

以下の「launch binder」というボタンをクリックすると，Binderに移動し，解析コードとデータの準備されたRstudio serverが起動します。

※ BinderでのRstudio serverの起動にはある程度時間がかかります。

  <!-- badges: start -->
  [![Launch Rstudio Binder](http://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/ykunisato/somatori_kunisato_2019_replication_study/master?urlpath=rstudio)
  <!-- badges: end -->

## 解析の再現方法

BinderでRstudio serverが起動したら，"analysis"フォルダ内の"analyze_data_00"から"analyze_data_03"まで順番に開いてください。

なお，匿名化されてないデータを扱う"analyze_data_00"と"analyze_data_03"はHTMLファイルで提供していますが，"analyze_data_01"と"analyze_data_02"はR Markdown形式で配布しており実行可能になります。

"analyze_data_01"と"analyze_data_02"は，以下の２通りの方法で，杣取・国里(2019)の「アンへドニア(anhedonia)と遅延割引: Lempert & Pizzagalli (2010)の追試」の解析を再現できるかと思います。

- (1)Knitボタンをクリックして，一気に解析を行ってHTMLファイルで確認する
- (2)"analyze_data.Rmd"の各チャンクを上から順番に実施する

※なお，最尤推定は計算の負荷が高いので，Binderで実行しないようにしています。もし推定も実施されたい場合は，コードとデータをダウンロードした上で，ローカル環境で行ってください。

## DOI

本リポジトリのDigital Object Identifier(DOI)は，以下になります。本リポジトリのコードやデータの使用に関しては，以下のDOIも引用ください。

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.3402512.svg)](https://doi.org/10.5281/zenodo.3402512)


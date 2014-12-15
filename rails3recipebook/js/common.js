var chapters = JSON.parse('[{"chapter":"第1章","title":"Railsの基本","start_num":0,"end_num":13,"straplines":[{"num":"001","title":"Railsをインストールする","page":2,"tags":["初級","基本","セットアップ"]},{"num":"002","title":"Railsアプリケーションを作成する","page":6,"tags":["初級","基本","セットアップ","3.0新記法"]},{"num":"003","title":"Railsアプリケーションのファイル構造を理解する","page":8,"tags":["初級","概要","3.1新機能"]},{"num":"004","title":"DB接続を設定する","page":10,"tags":["初級","基本","セットアップ","AR"]},{"num":"005","title":"モデル・ビュー・コントローラを自動生成する","page":13,"tags":["初級","基本","AR","AC","AV"]},{"num":"006","title":"Railsの規約とは","page":15,"tags":["初級","概要"]},{"num":"007","title":"Railsの宣言的記法とは","page":19,"tags":["初級","概要"]},{"num":"008","title":"DBのマイグレーションファイルを生成する","page":20,"tags":["初級","基本","マイグレーション","セットアップ","AR","3.0新記法"]},{"num":"009","title":"APIのドキュメントを参照する","page":23,"tags":["初級","基本"]},{"num":"010","title":"使用しているRubyやRailsのバージョンを調べる","page":25,"tags":["初級","基本"]},{"num":"011","title":"Railsをバージョンアップする","page":27,"tags":["中級","基本"]},{"num":"012","title":"Railsやライブラリのバージョンを固定する","page":28,"tags":["中級","基本","セットアップ"]},{"num":"013","title":"開発サーバを動かす","page":29,"tags":["初級","基本","3.0新記法"]},{"num":"014","title":"Railsを対話的に実行する","page":30,"tags":["初級","基本","3.0新記法"]}]},{"chapter":"第2章","title":"コントローラ","start_num":14,"end_num":49,"straplines":[{"num":"015","title":"コントローラとは","page":32,"tags":["AC","初級","概要"]},{"num":"016","title":"テンプレートを指定して描画する","page":34,"tags":["AC","初級","素振り重要","AV"]},{"num":"017","title":"文字列を直接描画する","page":36,"tags":["AC","初級","素振り重要","AV"]},{"num":"018","title":"APIレスポンスを文字列として描画する","page":37,"tags":["AC","中級","API"]},{"num":"019","title":"描画結果を文字列として取得する","page":38,"tags":["AC","初級","やりすぎ注意"]},{"num":"020","title":"URLを生成する","page":39,"tags":["AC","初級","REST","素振り重要","3.0新記法"]},{"num":"021","title":"コントローラ以外からURLを生成する","page":43,"tags":["AC","上級","REST","API","3.0新記法"]},{"num":"022","title":"他のURLへリダイレクトさせる","page":44,"tags":["AC","初級","REST"]},{"num":"023","title":"ステータスコードのみのレスポンスを返す","page":45,"tags":["AC","中級","API"]},{"num":"024","title":"ページのレイアウトを設定する","page":47,"tags":["AC","初級","便利","やりすぎ注意"]},{"num":"025","title":"コントローラ全体の共通のメソッドを追加する","page":49,"tags":["AC","中級","概論",""]},{"num":"026","title":"コントローラ名やアクション名を取得する","page":51,"tags":["AC","初級","小ネタ"]},{"num":"027","title":"アクションの前または後にフィルタを適用する","page":53,"tags":["AC","初級","基本","フィルタ"]},{"num":"028","title":"アクションの前後両方にフィルタを適用する","page":57,"tags":["AC","初級","フィルタ"]},{"num":"029","title":"フィルタの実行をスキップする","page":62,"tags":["AC","中級","やりすぎ注意","フィルタ"]},{"num":"030","title":"リクエストの種類でレスポンスのフォーマットを変更する","page":63,"tags":["AC","中級","REST","API","3.0新機能"]},{"num":"031","title":"レスポンスフォーマットごとに処理を分岐する","page":65,"tags":["AC","中級","REST","API"]},{"num":"032","title":"簡単なメッセージを画面へ表示する","page":66,"tags":["AC","初級","便利"]},{"num":"033","title":"セッションにデータを保存する","page":68,"tags":["AC","初級","やりすぎ注意","セッション"]},{"num":"034","title":"セッションの保存方法を変更する","page":70,"tags":["AC","中級","セッション"]},{"num":"035","title":"セッションを失効させる","page":71,"tags":["AC","中級","セッション"]},{"num":"036","title":"フォームに入力された値を取得する","page":73,"tags":["AC","初級","素振り重要"]},{"num":"037","title":"リクエストヘッダの内容を取得する","page":76,"tags":["AC","中級","やりすぎ注意"]},{"num":"038","title":"レスポンスヘッダの内容を設定する","page":77,"tags":["AC","中級","やりすぎ注意"]},{"num":"039","title":"画像やファイルをダウンロードさせる","page":78,"tags":["AC","中級","パフォーマンス"]},{"num":"040","title":"クッキーを設定する","page":80,"tags":["AC","中級","やりすぎ注意"]},{"num":"041","title":"本番環境でのエラーをまとめて処理する","page":82,"tags":["AC","上級","素振り重要"]},{"num":"042","title":"リソースへのルーティングを定義する","page":84,"tags":["AC","初級","REST","素振り重要","3.0新記法"]},{"num":"043","title":"リソースへのルーティングをカスタマイズする","page":87,"tags":["AC","中級","REST","素振り重要","3.0新記法"]},{"num":"044","title":"複雑なルーティングを定義する","page":91,"tags":["AC","上級","やりすぎ注意","3.0新記法"]},{"num":"045","title":"Rackアプリケーションやミドルウェアを作る","page":94,"tags":["AC","上級","Rack","3.0新機能"]},{"num":"046","title":"RackミドルウェアをRailsに組み込む","page":98,"tags":["AC","中級","Rack","フィルタ","3.0新機能"]},{"num":"047","title":"Rackアプリケーションをマウントする","page":100,"tags":["AC","上級","Rack","パフォーマンス","3.0新機能"]},{"num":"048","title":"Basic認証をかける","page":101,"tags":["AC","認証","初級","セキュリティ"]},{"num":"049","title":"Digest認証をかける","page":102,"tags":["AC","認証","中級","セキュリティ"]},{"num":"050","title":"SSLを使う","page":103,"tags":["AC","Rack","セキュリティ","3.0新機能","3.1機能追加"]}]},{"chapter":"第3章","title":"モデル","start_num":50,"end_num":100,"straplines":[{"num":"051","title":"モデルとは、ActiveRecordとは","page":106,"tags":["AR","AMo","初級","概要"]},{"num":"052","title":"DBスキーマを定義する","page":1080,"tags":["AR","初級","マイグレーション","3.1新機能"]},{"num":"053","title":"マイグレーションでRailsにとって特別なカラムを追加する","page":113,"tags":["AR","初級","マイグレーション"]},{"num":"054","title":"DBを検索してモデルオブジェクトをロードする","page":114,"tags":["AR","初級","素振り重要"]},{"num":"055","title":"DBに初期データを投入する","page":116,"tags":["AR","中級","3.0新機能"]},{"num":"056","title":"リレーションを理解する","page":117,"tags":["AR","初級","リレーション","まとめ","3.0新機能"]},{"num":"057","title":"検索条件を指定する","page":120,"tags":["AR","初級","リレーション","3.0新記法"]},{"num":"058","title":"並び順を指定してDBを検索する","page":122,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"059","title":"取得件数を指定してDBを検索する","page":124,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"060","title":"関連テーブルとの結合を行う","page":125,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"061","title":"関連モデルの情報をまとめてロードする","page":127,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"062","title":"検索時に実行されるSQLの一部を変える","page":129,"tags":["AR","上級","リレーション","3.0新記法"]},{"num":"063","title":"検索条件をモデルにあらかじめ定義する","page":130,"tags":["AR","初級","リレーション","3.0新記法"]},{"num":"064","title":"デフォルトスコープを定義する","page":132,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"065","title":"リレーションにかかっているスコープを除外する","page":133,"tags":["AR","中級","リレーション","3.0新記法"]},{"num":"066","title":"複数のモデルにまたがるリレーションを連結する","page":135,"tags":["AR","上級","リレーション","DRY","3.0新機能"]},{"num":"067","title":"カラムを簡単に完全一致検索する","page":136,"tags":["AR","中級"]},{"num":"068","title":"モデルオブジェクトの内容をDBから再ロードする","page":138,"tags":["AR","上級"]},{"num":"069","title":"モデルオブジェクトを生成する","page":139,"tags":["AR","初級","素振り重要"]},{"num":"070","title":"モデルオブジェクトを保存してDBにレコードを追加する","page":140,"tags":["AR","初級","素振り重要"]},{"num":"071","title":"モデルオブジェクトを変更してDB内のレコードを更新する","page":142,"tags":["AR","初級"]},{"num":"072","title":"モデルオブジェクトを削除してDBからレコードを削除する","page":144,"tags":["AR","初級"]},{"num":"073","title":"1対多の関連での参照元を設定する（belongs_to）","page":146,"tags":["AR","初級","モデルの関連付け","素振り重要"]},{"num":"074","title":"1対多の関連での参照先を設定する（has_many）","page":150,"tags":["AR","初級","モデルの関連付け","素振り重要"]},{"num":"075","title":"1対1の関連を設定する（has_one）","page":154,"tags":["AR","初級","モデルの関連付け"]},{"num":"076","title":"関連をまたいだ関連を設定する","page":157,"tags":["AR","中級","モデルの関連付け","3.0新機能","3.1新機能"]},{"num":"077","title":"多対多の関連を設定する","page":160,"tags":["AR","中級","モデルの関連付け"]},{"num":"078","title":"ポリモーフィック関連を利用する","page":163,"tags":["AR","上級","モデルの関連付け"]},{"num":"079","title":"関連とDBへの保存のタイミングを整理する","page":167,"tags":["AR","上級","まとめ"]},{"num":"080","title":"SQLを直接使って検索する","page":170,"tags":["AR","上級","パフォーマンス"]},{"num":"081","title":"SQLの集計関数を利用する","page":173,"tags":["AR","初級"]},{"num":"082","title":"トランザクションを使用する","page":175,"tags":["AR","中級","セキュリティ"]},{"num":"083","title":"rails consoleでモデルを操作する","page":177,"tags":["AR","初級","素振り重要","これは便利","3.0新機能","3.1新機能"]},{"num":"084","title":"レコードの作成時刻・更新時刻を自動的に保存する","page":180,"tags":["AR","初級","マイグレーション"]},{"num":"085","title":"ロックを利用する","page":182,"tags":["AR","上級","マイグレーション"]},{"num":"086","title":"DBに保存する値を検証する（バリデーションの概要を知る）","page":185,"tags":["AR","初級","まとめ","バリデーション"]},{"num":"087","title":"バリデーションを定義する","page":189,"tags":["AR","初級","バリデーション","素振り重要"]},{"num":"088","title":"対象の属性を軸にしてすっきりとバリデーションを定義する","page":195,"tags":["AR","初級","バリデーション","Sexy","3.0新記法"]},{"num":"089","title":"バリデーションメソッドを自分で定義する","page":196,"tags":["AR","中級","バリデーション","3.0新記法"]},{"num":"090","title":"カラムに対応しない属性を保存可能にする","page":201,"tags":["AR","上級"]},{"num":"091","title":"コールバックを利用する","page":203,"tags":["AR","中級","素振り重要"]},{"num":"092","title":"オブザーバを利用する","page":208,"tags":["AR","上級","DRY"]},{"num":"093","title":"カウンタキャッシュを利用する","page":210,"tags":["AR","上級","パフォーマンス"]},{"num":"094","title":"バリューオブジェクトを使う","page":213,"tags":["AR","上級"]},{"num":"095","title":"DBアクセスを効率化する","page":217,"tags":["AR","中級","パフォーマンス"]},{"num":"096","title":"複数の属性を更新する場合に、特定の属性の更新を防ぐ","page":220,"tags":["AR","中級","セキュリティ"]},{"num":"097","title":"id以外のカラムを主キーにする","page":223,"tags":["AR","上級","レガシー","おすすめできない"]},{"num":"098","title":"テーブル名を変える","page":224,"tags":["AR","上級","レガシー","おすすめできない"]},{"num":"099","title":"DBクエリを直接発行する","page":225,"tags":["AR","上級","やりすぎ注意","セキュリティ"]},{"num":"100","title":"モデルの値の変更を検知する","page":227,"tags":["AR","中級","これは便利"]},{"num":"101","title":"DBに存在しないモデルオブジェクトを定義する","page":228,"tags":["AMo","上級","これは便利","3.0新機能"]}]},{"chapter":"第4章","title":"ビュー","start_num":101,"end_num":132,"straplines":[{"num":"102","title":"ビューテンプレートとは","page":232,"tags":["AV","初級","概要"]},{"num":"103","title":"ERBでRubyコードを実行してHTMLタグを出力する","page":234,"tags":["AV","初級"]},{"num":"104","title":"HTMLタグを取り除く","page":238,"tags":["AV","初級"]},{"num":"105","title":"URL文字列をコントローラ名やアクション名から生成する","page":239,"tags":["AV","初級","AC","素振り重要"]},{"num":"106","title":"aタグを作成する","page":240,"tags":["AV","初級"]},{"num":"107","title":"imgタグを作成する","page":243,"tags":["AV","初級"]},{"num":"108","title":"レイアウトを使ってテンプレートを分割する","page":245,"tags":["AV","初級"]},{"num":"109","title":"ネストしたレイアウトファイルを使う","page":249,"tags":["AV","初級"]},{"num":"110","title":"スタイルシートやJavaScriptを読み込む","page":250,"tags":["AV","初級"]},{"num":"111","title":"分割されたテンプレートを描画する","page":254,"tags":["AV","初級"]},{"num":"112","title":"モデルに対応するフォームを作成する","page":256,"tags":["AV","初級","フォーム"]},{"num":"113","title":"モデルに対応したフォーム内で入力項目を作成する","page":260,"tags":["AV","初級","フォーム"]},{"num":"114","title":"任意のフォームを作成する","page":265,"tags":["AV","初級","フォーム"]},{"num":"115","title":"ラベルを作成する","page":269,"tags":["AV","初級","フォーム"]},{"num":"116","title":"フォームに日付や時刻の入力項目を作成する","page":271,"tags":["AV","初級","フォーム"]},{"num":"117","title":"フォームの二度押しを防ぐ","page":273,"tags":["AV","中級","フォーム"]},{"num":"118","title":"フォームにドロップダウンリスト（selectタグ）を作成する","page":274,"tags":["AV","中級","フォーム"]},{"num":"119","title":"モデルのコレクションからドロップダウンリスト（selectタグ）を作成する","page":276,"tags":["AV","中級","フォーム"]},{"num":"120","title":"ネストしたモデルのフォームを作成する","page":278,"tags":["AV","中級","フォーム"]},{"num":"121","title":"フォームに1種類の入力項目を複数作成する","page":279,"tags":["AV","中級","フォーム"]},{"num":"122","title":"バリデーションのエラーメッセージを表示する","page":281,"tags":["AV","中級","フォーム"]},{"num":"123","title":"数値を特定のフォーマットで表示する","page":282,"tags":["AV","初級"]},{"num":"124","title":"RubyスクリプトでHTMLタグを作成する","page":284,"tags":["AV","初級"]},{"num":"125","title":"規約に沿ったDOM要素のid属性やclass属性を付与する","page":287,"tags":["AV","中級"]},{"num":"126","title":"繰り返し項目を簡単に出力する","page":289,"tags":["AV","中級"]},{"num":"127","title":"ヘルパーメソッドを作成する","page":291,"tags":["AV","上級"]},{"num":"128","title":"ビューの一部分をキャッシュする","page":293,"tags":["AV","初級"]},{"num":"129","title":"Hamlを使う","page":297,"tags":["AV","中級"]},{"num":"130","title":"Ajaxを使う","page":300,"tags":["AV","初級","3.0新記法","3.1新記法"]},{"num":"131","title":"HTML5タグを使う","page":302,"tags":["AV","中級","3.0新記法"]},{"num":"132","title":"Sass（SCSS）を使う","page":303,"tags":["AV","中級","3.1新機能"]},{"num":"133","title":"CoffeeScriptを使う","page":308,"tags":["AV","中級","3.1新機能"]}]},{"chapter":"第5章","title":"ActiveSupport","start_num":133,"end_num":152,"straplines":[{"num":"134","title":"単数形と複数形を変換する","page":316,"tags":["AS","初級"]},{"num":"135","title":"クラス名とファイル名とテーブル名を相互変換する","page":317,"tags":["AS","初級","AR"]},{"num":"136","title":"日付や時刻を計算する","page":319,"tags":["AS","初級","便利"]},{"num":"137","title":"数値をバイト単位で表示する","page":322,"tags":["AS","初級","便利"]},{"num":"138","title":"RubyオブジェクトとYAMLを相互変換する","page":323,"tags":["AS","初級","API","便利"]},{"num":"139","title":"モデルオブジェクトや配列とXMLを相互変換する","page":325,"tags":["AS","初級","API","便利"]},{"num":"140","title":"RubyオブジェクトとJSONを相互変換する","page":328,"tags":["AS","初級","API"]},{"num":"141","title":"ArrayやEnumerableに追加された便利なメソッド","page":330,"tags":["AS","中級","便利","素振り重要"]},{"num":"142","title":"変数が特定のパラメータリストに含まれるか判定する","page":333,"tags":["AS","初級","3.1新機能","便利"]},{"num":"143","title":"Hashに追加された便利なメソッド","page":334,"tags":["AS","中級","素振り重要","便利"]},{"num":"144","title":"小数を任意の桁数で丸める","page":337,"tags":["AS","AV","初級"]},{"num":"145","title":"Railsスタイルのメソッド引数を扱う","page":338,"tags":["AS","上級","素振り重要","やりすぎ注意"]},{"num":"146","title":"複数のメソッドに同じパラメータを渡す","page":341,"tags":["AS","上級","素振り重要","やりすぎ注意"]},{"num":"147","title":"クラス変数のアクセサを定義する","page":343,"tags":["AS","中級","便利","メタプログラミング"]},{"num":"148","title":"既存のメソッドに機能を追加する","page":344,"tags":["AS","上級","やりすぎ注意","メタプログラミング"]},{"num":"149","title":"nilや空文字列などを透過的に扱う","page":346,"tags":["AS","初級","やりすぎ注意"]},{"num":"150","title":"簡単にGzip圧縮する","page":348,"tags":["AS","上級","パフォーマンス"]},{"num":"151","title":"タイムゾーン付きの日付を使う","page":349,"tags":["AS","上級","やりすぎ注意",""]},{"num":"152","title":"メソッドの呼び出し結果をメモ化する","page":351,"tags":["AS","中級","パフォーマンス"]},{"num":"153","title":"国際化（日本語化）する","page":353,"tags":["AS","中級","i18n","便利"]}]},{"chapter":"第6章","title":"メール","start_num":153,"end_num":158,"straplines":[{"num":"154","title":"メールを送信する","page":358,"tags":["メール","初級","概要","3.0新記法"]},{"num":"155","title":"メール送信の設定を変更する","page":361,"tags":["メール","初級"]},{"num":"156","title":"添付メールを送信する","page":363,"tags":["メール","中級","素振り重要","3.0新記法"]},{"num":"157","title":"エラーメールの戻り先を設定する","page":364,"tags":["メール","中級"]},{"num":"158","title":"メールの文字化けを防ぐ","page":365,"tags":["メール","中級","i18n"]},{"num":"159","title":"受信メールを扱う","page":366,"tags":["メール","中級"]}]},{"chapter":"第7章","title":"ActiveResource","start_num":159,"end_num":164,"straplines":[{"num":"160","title":"ActiveResourceとは","page":368,"tags":["ARes","初級","概要"]},{"num":"161","title":"ActiveResourceを利用するための設定をする","page":370,"tags":["ARes","初級","REST"]},{"num":"162","title":"リソースを取得する","page":373,"tags":["ARes","初級","REST"]},{"num":"163","title":"リソースを作成・更新する","page":376,"tags":["ARes","中級","REST"]},{"num":"164","title":"リソースを削除する","page":379,"tags":["ARes","中級","REST"]},{"num":"165","title":"単純なCRUD以外のリクエストを送信する","page":380,"tags":["ARes","上級","やりすぎ注意"]}]},{"chapter":"第8章","title":"テスト","start_num":165,"end_num":173,"straplines":[{"num":"166","title":"RSpecを組み込む","page":384,"tags":["テスト","初級","ライブラリ"]},{"num":"167","title":"RSpecの基本的な動作を知る","page":386,"tags":["テスト","概要","初級"]},{"num":"168","title":"RSpecで使えるマッチャ","page":390,"tags":["テスト","初級","便利"]},{"num":"169","title":"テストを実行する","page":393,"tags":["テスト","初級","便利"]},{"num":"170","title":"モデルのテストを実行する","page":395,"tags":["テスト","初級","AR","素振り重要"]},{"num":"171","title":"コントローラのテストを実行する","page":397,"tags":["テスト","中級","AC","やりすぎ注意"]},{"num":"172","title":"エンドツーエンドのテストを実行する","page":401,"tags":["テスト","上級","素振り重要"]},{"num":"173","title":"モックやスタブを使う","page":406,"tags":["テスト","上級","やりすぎ注意"]},{"num":"174","title":"その他のテスティングライブラリを利用する","page":409,"tags":["テスト","上級","ライブラリ","概要"]}]},{"chapter":"第9章","title":"セキュリティ","start_num":174,"end_num":177,"straplines":[{"num":"175","title":"XSS攻撃の対策をする","page":414,"tags":["セキュリティ","中級","3.0新記法"]},{"num":"176","title":"SQLインジェクション攻撃の対策をする","page":416,"tags":["セキュリティ","中級"]},{"num":"177","title":"CSRF攻撃の対策をする","page":418,"tags":["セキュリティ","中級"]},{"num":"178","title":"Session Fixation攻撃を防ぐ","page":420,"tags":["セキュリティ","中級"]}]},{"chapter":"第10章","title":"デプロイと実行環境","start_num":178,"end_num":181,"straplines":[{"num":"179","title":"gemファイルを管理する","page":422,"tags":["Bundler","初級","3.0新記法"]},{"num":"180","title":"Passengerを使う","page":425,"tags":["デプロイ","初級"]},{"num":"181","title":"Capistranoを設定する","page":428,"tags":["デプロイ","初級"]},{"num":"182","title":"Capistranoでデプロイする","page":432,"tags":["デプロイ","初級"]}]},{"chapter":"第11章","title":"ライブラリ","start_num":182,"end_num":189,"straplines":[{"num":"183","title":"OmniAuthでユーザ認証の仕組みを作る","page":438,"tags":["中級","RubyGems","認証"]},{"num":"184","title":"アップロードされたファイルを扱う","page":442,"tags":["中級","RubyGems","画像"]},{"num":"185","title":"DBの検索結果を複数のページに分けて表示する","page":445,"tags":["中級","RubyGems","便利","3.0新機能"]},{"num":"186","title":"非同期で処理を実行する","page":448,"tags":["上級","RubyGems","便利","パフォーマンス","素振り重要"]},{"num":"187","title":"I18nの訳語ファイルを自動生成する","page":451,"tags":["中級","RubyGems","便利","i18n","AS"]},{"num":"188","title":"Rails用ライブラリを探す","page":454,"tags":["初級","RubyGems","素振り重要"]},{"num":"189","title":"自分で作ったライブラリをRubyGemsとして公開する","page":458,"tags":["だいぶ上級","RubyGems","Bundler","Social Coding"]},{"num":"190","title":"Railsを直す","page":461,"tags":["超上級","Social Coding","俺がオープンソースだ"]}]}]');
var recipe = $('#chapters');
var g_tags = {};
var g_tag_count = 1;
var displays = [];

function create_tag_cloud(){
	g_tag_html = '';
	tag_return = 0;
	$.each(g_tags, function(i, val){
		g_tag_html += '<a href="javascript:void(0);" class="label label-success tag tag-cloud" g-tag-id="' + val.tag_id + '">';
		g_tag_html += val.tag + ' (' + val.count + ')';
		g_tag_html += '</a>';
		if(tag_return == 6) { g_tag_html += '<br /><br />'; tag_return = 0; } else { tag_return++;}
	});
	$('#tags-area').append(g_tag_html);
	
	/* toggle */
	$('.strapline').each(function(){
		tags = [];
		$(this).find('a').each(function(){
			tags.push($(this).attr('g-tag-id'));
		});
		$(this).attr('g-tag-ids', tags);
	});
	
	
	$('.tag-cloud').click(function(){
		tag_id = $(this).attr('g-tag-id');
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			displays.splice(displays.indexOf(tag_id), 1);
		}else{
			$(this).addClass('active');
			displays.push(tag_id);
		}
		
		$('.strapline').each(function(){
			disp = false;
			tags = $($(this).attr('g-tag-ids').split(',')).each(function(i, val){
				if($.inArray(val.toString(), displays) > -1) { disp = true; }
			});
			(disp || displays.length == 0) ? $(this).show() : $(this).hide();
		});
	});
	
}

function create_tags(tags){
	item_t = '';
	$(tags).each(function(i, val){
		if(val.length){
			if(g_tags[val]) {
				tag_id = g_tags[val]['tag_id'];
				g_tags[val]['count']++;
			} else {
				g_tags[val] = {tag_id: g_tag_count, tag: val ,count: 1};
				tag_id = g_tag_count++;
			}
			item_t += '<a href="javascript:void(0);" class="label label-success tag" g-tag-id="' + tag_id + '">' + val + '</a>';
		}
	});
	return item_t;
}

function create_list_group_item_text(straplines){
  var item_s = '';
  $(straplines).map(function(){
  	item_s += '<div class="list-group-item strapline">';
    item_s += '<p class="list-group-item-text">';
    item_s += this.num + '　' + this.title + ' P' + this.page + '〜';
    item_s += '</p>';
    item_s += '<p class="tag-list">';
    item_s += create_tags(this.tags);
    item_s += '</p>';
    item_s += '</div>';
  });
  return item_s;
}

function create_list_group_item(chapter){
  var item = '<div class="list-group">';
  item += '<div class="list-group-item list-group-item-success">';
  item += '<h4 class="list-group-item-heading">';
  item += chapter.chapter + ' ' + chapter.title;
  item += '</h4>';
  item += '</div>';
  item += create_list_group_item_text(chapter.straplines);
  item += '</div>';
  recipe.append(item);
}

$(chapters).map(function(){
  create_list_group_item(this);
});

create_tag_cloud();

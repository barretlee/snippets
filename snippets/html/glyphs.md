---
title: 转义字符
---

<article id="post-6490">
  <h3>Special Characters</h3>
  <table class="entities_num">
    <tbody>
      <tr>
        <td>&amp;quot;</td>
        <td>&amp;#34;</td>
        <td>"</td>
        <td>quotation mark</td>
        <td>u+0022 ISOnum</td>
        <td>p:before { content:"\0022"; }</td>
        <td onclick="alert(&quot;\42&quot;)">alert("\42")</td>
      </tr>
      <tr>
        <td>&amp;amp;</td>
        <td>&amp;#38;</td>
        <td>&amp;</td>
        <td>ampersand</td>
        <td>u+0026 ISOnum</td>
        <td>p:before { content:"\0026"; }</td>
        <td onclick="alert(&quot;\46&quot;)">alert("\46")</td>
      </tr>
      <tr>
        <td>&amp;lt;</td>
        <td>&amp;#60;</td>
        <td>&lt;</td>
        <td>less-than sign</td>
        <td>u+003C ISOnum</td>
        <td>p:before { content:"\003c"; }</td>
        <td onclick="alert(&quot;\74&quot;)">alert("\74");</td>
      </tr>
      <tr>
        <td>&amp;gt;</td>
        <td>&amp;#62;</td>
        <td>&gt;</td>
        <td>greater-than sign</td>
        <td>u+003E ISOnum</td>
        <td>p:before { content:"\003e"; }</td>
        <td onclick="alert(&quot;\76&quot;)">alert("\76");</td>
      </tr>
    </tbody>
  </table>
  <h3>Latin-1 entity set for HTML</h3>
  <table class="entities_num">
    <tbody>
      <tr>
        <th>Name</th>
        <th>&nbsp;</th>
        <th>Numeric</th>
        <th>Description</th>
        <th>Hex</th>
        <th>ISO in CSS content </th>
        <th>Octal</th>
      </tr>
      <tr>
        <td>&amp;nbsp;</td>
        <td>&nbsp;</td>
        <td>&amp;#160;</td>
        <td>no-break space</td>
        <td>%A0</td>
        <td>p:before { content:"\00a0"; }</td>
        <td onclick="alert(&quot;\240&quot;)">alert("\240");</td>
      </tr>
      <tr>
        <td>&amp;iexcl;</td>
        <td>¡</td>
        <td>&amp;#161;</td>
        <td>inverted exclamation mark</td>
        <td>%A1</td>
        <td>p:before { content:"\00a1"; }</td>
        <td onclick="alert(&quot;\241&quot;)">alert("\241");</td>
      </tr>
      <tr>
        <td>&amp;cent;</td>
        <td>¢</td>
        <td>&amp;#162;</td>
        <td>cent sign</td>
        <td>%A2</td>
        <td>p:before { content:"\00a2"; }</td>
        <td onclick="alert(&quot;\242&quot;)">alert("\242");</td>
      </tr>
      <tr>
        <td>&amp;pound;</td>
        <td>£</td>
        <td>&amp;#163;</td>
        <td>pound sterling sign</td>
        <td>%A3</td>
        <td>p:before { content:"\00a3"; }</td>
        <td onclick="alert(&quot;\243&quot;)">alert("\243");</td>
      </tr>
      <tr>
        <td>&amp;curren;</td>
        <td>¤</td>
        <td>&amp;#164;</td>
        <td>general currency sign</td>
        <td>%A4</td>
        <td>p:before { content:"\00a4"; }</td>
        <td onclick="alert(&quot;\244&quot;)">alert("\244");</td>
      </tr>
      <tr>
        <td>&amp;yen;</td>
        <td>¥</td>
        <td>&amp;#165;</td>
        <td>yen sign</td>
        <td>%A5</td>
        <td>p:before { content:"\00a5"; }</td>
        <td onclick="alert(&quot;\245&quot;)">alert("\245");</td>
      </tr>
      <tr>
        <td>&amp;brvbar;</td>
        <td>¦</td>
        <td>&amp;#166;</td>
        <td>broken (vertical) bar</td>
        <td>%A6</td>
        <td>p:before { content:"\00a6"; }</td>
        <td onclick="alert(&quot;\246&quot;)">alert("\246");</td>
      </tr>
      <tr>
        <td>&amp;sect;</td>
        <td>§</td>
        <td>&amp;#167;</td>
        <td>section sign</td>
        <td>%A7</td>
        <td>p:before { content:"\00a7"; }</td>
        <td onclick="alert(&quot;\247&quot;)">alert("\247");</td>
      </tr>
      <tr>
        <td>&amp;uml;</td>
        <td>¨</td>
        <td>&amp;#168;</td>
        <td>umlaut (dieresis)</td>
        <td>%A8</td>
        <td>p:before { content:"\00a8"; }</td>
        <td onclick="alert(&quot;\250&quot;)">alert("\250");</td>
      </tr>
      <tr>
        <td>&amp;copy;</td>
        <td>©</td>
        <td>&amp;#169;</td>
        <td>copyright sign</td>
        <td>%A9</td>
        <td>p:before { content:"\00a9"; }</td>
        <td onclick="alert(&quot;\251&quot;)">alert("\251");</td>
      </tr>
      <tr>
        <td>&amp;ordf;</td>
        <td>ª</td>
        <td>&amp;#170;</td>
        <td>ordinal indicator, feminine</td>
        <td>%AA</td>
        <td>p:before { content:"\00aa"; }</td>
        <td onclick="alert(&quot;\252&quot;)">alert("\252");</td>
      </tr>
      <tr>
        <td>&amp;laquo;</td>
        <td>«</td>
        <td>&amp;#171;</td>
        <td>angle quotation mark, left</td>
        <td>%AB</td>
        <td>p:before { content:"\00ab"; }</td>
        <td onclick="alert(&quot;\253&quot;)">alert("\253");</td>
      </tr>
      <tr>
        <td>&amp;not;</td>
        <td>¬</td>
        <td>&amp;#172;</td>
        <td>not sign</td>
        <td>%AC</td>
        <td>p:before { content:"\00ac"; }</td>
        <td onclick="alert(&quot;\254&quot;)">alert("\254");</td>
      </tr>
      <tr>
        <td>&amp;shy;</td>
        <td>&shy;</td>
        <td>&amp;#173;</td>
        <td>soft hyphen</td>
        <td>%AD</td>
        <td>p:before { content:"\00ad"; }</td>
        <td onclick="alert(&quot;\255&quot;)">alert("\255");</td>
      </tr>
      <tr>
        <td>&amp;reg;</td>
        <td>®</td>
        <td>&amp;#174;</td>
        <td>registered sign</td>
        <td>%AE</td>
        <td>p:before { content:"\00ae"; }</td>
        <td onclick="alert(&quot;\256&quot;)">alert("\256");</td>
      </tr>
      <tr>
        <td>&amp;macr;</td>
        <td>¯</td>
        <td>&amp;#175;</td>
        <td>macron</td>
        <td>%AF</td>
        <td>p:before { content:"\00af"; }</td>
        <td onclick="alert(&quot;\257&quot;)">alert("\257");</td>
      </tr>
      <tr>
        <td>&amp;deg;</td>
        <td>°</td>
        <td>&amp;#176;</td>
        <td>degree sign</td>
        <td>%B0</td>
        <td>p:before { content:"\00b0"; }</td>
        <td onclick="alert(&quot;\260&quot;)">alert("\260");</td>
      </tr>
      <tr>
        <td>&amp;plusmn;</td>
        <td>±</td>
        <td>&amp;#177;</td>
        <td>plus-or-minus sign</td>
        <td>%B1</td>
        <td>p:before { content:"\00b1"; }</td>
        <td onclick="alert(&quot;\261&quot;)">alert("\261");</td>
      </tr>
      <tr>
        <td>&amp;sup2;</td>
        <td>²</td>
        <td>&amp;#178;</td>
        <td>superscript two</td>
        <td>%B2</td>
        <td>p:before { content:"\00b2"; }</td>
        <td onclick="alert(&quot;\262&quot;)">alert("\262");</td>
      </tr>
      <tr>
        <td>&amp;sup3;</td>
        <td>³</td>
        <td>&amp;#179;</td>
        <td>superscript three</td>
        <td>%B3</td>
        <td>p:before { content:"\00b3"; }</td>
        <td onclick="alert(&quot;\263&quot;)">alert("\263");</td>
      </tr>
      <tr>
        <td>&amp;acute;</td>
        <td>´</td>
        <td>&amp;#180;</td>
        <td>acute accent</td>
        <td>%B4</td>
        <td>p:before { content:"\00b4"; }</td>
        <td onclick="alert(&quot;\264&quot;)">alert("\264");</td>
      </tr>
      <tr>
        <td>&amp;micro;</td>
        <td>µ</td>
        <td>&amp;#181;</td>
        <td>micro sign</td>
        <td>%B5</td>
        <td>p:before { content:"\00b5"; }</td>
        <td onclick="alert(&quot;\265&quot;)">alert("\265");</td>
      </tr>
      <tr>
        <td>&amp;para;</td>
        <td>¶</td>
        <td>&amp;#182;</td>
        <td>pilcrow (paragraph sign)</td>
        <td>%B6</td>
        <td>p:before { content:"\00b6"; }</td>
        <td onclick="alert(&quot;\266&quot;)">alert("\266");</td>
      </tr>
      <tr>
        <td>&amp;middot;</td>
        <td>·</td>
        <td>&amp;#183;</td>
        <td>middle dot</td>
        <td>%B7</td>
        <td>p:before { content:"\00b7"; }</td>
        <td onclick="alert(&quot;\267&quot;)">alert("\267");</td>
      </tr>
      <tr>
        <td>&amp;cedil;</td>
        <td>¸</td>
        <td>&amp;#184;</td>
        <td>cedilla</td>
        <td>%B8</td>
        <td>p:before { content:"\00b8"; }</td>
        <td onclick="alert(&quot;\270&quot;)">alert("\270");</td>
      </tr>
      <tr>
        <td>&amp;sup1;</td>
        <td>¹</td>
        <td>&amp;#185;</td>
        <td>superscript one</td>
        <td>%B9</td>
        <td>p:before { content:"\00b9"; }</td>
        <td onclick="alert(&quot;\271&quot;)">alert("\271");</td>
      </tr>
      <tr>
        <td>&amp;ordm;</td>
        <td>º</td>
        <td>&amp;#186;</td>
        <td>ordinal indicator, masculine</td>
        <td>%BA</td>
        <td>p:before { content:"\00ba"; }</td>
        <td onclick="alert(&quot;\272&quot;)">alert("\272");</td>
      </tr>
      <tr>
        <td>&amp;raquo;</td>
        <td>»</td>
        <td>&amp;#187;</td>
        <td>angle quotation mark, right</td>
        <td>%BB</td>
        <td>p:before { content:"\00bb"; }</td>
        <td onclick="alert(&quot;\273&quot;)">alert("\273");</td>
      </tr>
      <tr>
        <td>&amp;frac14;</td>
        <td>¼</td>
        <td>&amp;#188;</td>
        <td>fraction one-quarter</td>
        <td>%BC</td>
        <td>p:before { content:"\00bc"; }</td>
        <td onclick="alert(&quot;\274&quot;)">alert("\274");</td>
      </tr>
      <tr>
        <td>&amp;frac12;</td>
        <td>½</td>
        <td>&amp;#189;</td>
        <td>fraction one-half</td>
        <td>%BD</td>
        <td>p:before { content:"\00bd"; }</td>
        <td onclick="alert(&quot;\275&quot;)">alert("\275");</td>
      </tr>
      <tr>
        <td>&amp;frac34;</td>
        <td>¾</td>
        <td>&amp;#190;</td>
        <td>fraction three-quarters</td>
        <td>%BE</td>
        <td>p:before { content:"\00be"; }</td>
        <td onclick="alert(&quot;\276&quot;)">alert("\276");</td>
      </tr>
      <tr>
        <td>&amp;iquest;</td>
        <td>¿</td>
        <td>&amp;#191;</td>
        <td>inverted question mark</td>
        <td>%BF</td>
        <td>p:before { content:"\00bf"; }</td>
        <td onclick="alert(&quot;\277&quot;)">alert("\277");</td>
      </tr>
      <tr>
        <td>&amp;Agrave;</td>
        <td>À</td>
        <td>&amp;#192;</td>
        <td>capital A, grave accent</td>
        <td>%C0</td>
        <td>p:before { content:"\00c0"; }</td>
        <td onclick="alert(&quot;\300&quot;)">alert("\300");</td>
      </tr>
      <tr>
        <td>&amp;Aacute;</td>
        <td>Á</td>
        <td>&amp;#193;</td>
        <td>capital A, acute accent</td>
        <td>%C1</td>
        <td>p:before { content:"\00c1"; }</td>
        <td onclick="alert(&quot;\301&quot;)">alert("\301");</td>
      </tr>
      <tr>
        <td>&amp;Acirc;</td>
        <td>Â</td>
        <td>&amp;#194;</td>
        <td>capital A, circumflex accent</td>
        <td>%C2</td>
        <td>p:before { content:"\00c2"; }</td>
        <td onclick="alert(&quot;\302&quot;)">alert("\302");</td>
      </tr>
      <tr>
        <td>&amp;Atilde;</td>
        <td>Ã</td>
        <td>&amp;#195;</td>
        <td>capital A, tilde</td>
        <td>%C3</td>
        <td>p:before { content:"\00c3"; }</td>
        <td onclick="alert(&quot;\303&quot;)">alert("\303");</td>
      </tr>
      <tr>
        <td>&amp;Auml;</td>
        <td>Ä</td>
        <td>&amp;#196;</td>
        <td>capital A, dieresis or umlaut mark</td>
        <td>%C4</td>
        <td>p:before { content:"\00c4"; }</td>
        <td onclick="alert(&quot;\304&quot;)">alert("\304");</td>
      </tr>
      <tr>
        <td>&amp;Aring;</td>
        <td>Å</td>
        <td>&amp;#197;</td>
        <td>capital A, ring</td>
        <td>%C5</td>
        <td>p:before { content:"\00c5"; }</td>
        <td onclick="alert(&quot;\305&quot;)">alert("\305");</td>
      </tr>
      <tr>
        <td>&amp;AElig;</td>
        <td>Æ</td>
        <td>&amp;#198;</td>
        <td>capital AE diphthong (ligature)</td>
        <td>%C6</td>
        <td>p:before { content:"\00c6"; }</td>
        <td onclick="alert(&quot;\306&quot;)">alert("\306");</td>
      </tr>
      <tr>
        <td>&amp;Ccedil;</td>
        <td>Ç</td>
        <td>&amp;#199;</td>
        <td>capital C, cedilla</td>
        <td>%C7</td>
        <td>p:before { content:"\00c7"; }</td>
        <td onclick="alert(&quot;\307&quot;)">alert("\307");</td>
      </tr>
      <tr>
        <td>&amp;Egrave;</td>
        <td>È</td>
        <td>&amp;#200;</td>
        <td>capital E, grave accent</td>
        <td>%C8</td>
        <td>p:before { content:"\00c8"; }</td>
        <td onclick="alert(&quot;\310&quot;)">alert("\310");</td>
      </tr>
      <tr>
        <td>&amp;Eacute;</td>
        <td>É</td>
        <td>&amp;#201;</td>
        <td>capital E, acute accent</td>
        <td>%C9</td>
        <td>p:before { content:"\00c9"; }</td>
        <td onclick="alert(&quot;\311&quot;)">alert("\311");</td>
      </tr>
      <tr>
        <td>&amp;Ecirc;</td>
        <td>Ê</td>
        <td>&amp;#202;</td>
        <td>capital E, circumflex accent</td>
        <td>%CA</td>
        <td>p:before { content:"\00ca"; }</td>
        <td onclick="alert(&quot;\312&quot;)">alert("\312");</td>
      </tr>
      <tr>
        <td>&amp;Euml;</td>
        <td>Ë</td>
        <td>&amp;#203;</td>
        <td>capital E, dieresis or umlaut mark</td>
        <td>%CB</td>
        <td>p:before { content:"\00cb"; }</td>
        <td onclick="alert(&quot;\313&quot;)">alert("\313");</td>
      </tr>
      <tr>
        <td>&amp;Igrave;</td>
        <td>Ì</td>
        <td>&amp;#204;</td>
        <td>capital I, grave accent</td>
        <td>%CC</td>
        <td>p:before { content:"\00cc"; }</td>
        <td onclick="alert(&quot;\314&quot;)">alert("\314");</td>
      </tr>
      <tr>
        <td>&amp;Iacute;</td>
        <td>Í</td>
        <td>&amp;#205;</td>
        <td>capital I, acute accent</td>
        <td>%CD</td>
        <td>p:before { content:"\00cd"; }</td>
        <td onclick="alert(&quot;\315&quot;)">alert("\315");</td>
      </tr>
      <tr>
        <td>&amp;Icirc;</td>
        <td>Î</td>
        <td>&amp;#206;</td>
        <td>capital I, circumflex accent</td>
        <td>%CE</td>
        <td>p:before { content:"\00ce"; }</td>
        <td onclick="alert(&quot;\316&quot;)">alert("\316");</td>
      </tr>
      <tr>
        <td>&amp;Iuml;</td>
        <td>Ï</td>
        <td>&amp;#207;</td>
        <td>capital I, dieresis or umlaut mark</td>
        <td>%CF</td>
        <td>p:before { content:"\00cf"; }</td>
        <td onclick="alert(&quot;\317&quot;)">alert("\317");</td>
      </tr>
      <tr>
        <td>&amp;ETH;</td>
        <td>Ð</td>
        <td>&amp;#208;</td>
        <td>capital Eth, Icelandic</td>
        <td>%D0</td>
        <td>p:before { content:"\00d0"; }</td>
        <td onclick="alert(&quot;\320&quot;)">alert("\320");</td>
      </tr>
      <tr>
        <td>&amp;Ntilde;</td>
        <td>Ñ</td>
        <td>&amp;#209;</td>
        <td>capital N, tilde</td>
        <td>%D1</td>
        <td>p:before { content:"\00d1"; }</td>
        <td onclick="alert(&quot;\321&quot;)">alert("\321");</td>
      </tr>
      <tr>
        <td>&amp;Ograve;</td>
        <td>Ò</td>
        <td>&amp;#210;</td>
        <td>capital O, grave accent</td>
        <td>%D2</td>
        <td>p:before { content:"\00d2"; }</td>
        <td onclick="alert(&quot;\322&quot;)">alert("\322");</td>
      </tr>
      <tr>
        <td>&amp;Oacute;</td>
        <td>Ó</td>
        <td>&amp;#211;</td>
        <td>capital O, acute accent</td>
        <td>%D3</td>
        <td>p:before { content:"\00d3"; }</td>
        <td onclick="alert(&quot;\323&quot;)">alert("\323");</td>
      </tr>
      <tr>
        <td>&amp;Ocirc;</td>
        <td>Ô</td>
        <td>&amp;#212;</td>
        <td>capital O, circumflex accent</td>
        <td>%D4</td>
        <td>p:before { content:"\00d4"; }</td>
        <td onclick="alert(&quot;\324&quot;)">alert("\324");</td>
      </tr>
      <tr>
        <td>&amp;Otilde;</td>
        <td>Õ</td>
        <td>&amp;#213;</td>
        <td>capital O, tilde</td>
        <td>%D5</td>
        <td>p:before { content:"\00d5"; }</td>
        <td onclick="alert(&quot;\325&quot;)">alert("\325");</td>
      </tr>
      <tr>
        <td>&amp;Ouml;</td>
        <td>Ö</td>
        <td>&amp;#214;</td>
        <td>capital O, dieresis or umlaut mark</td>
        <td>%D6</td>
        <td>p:before { content:"\00d6"; }</td>
        <td onclick="alert(&quot;\326&quot;)">alert("\326");</td>
      </tr>
      <tr>
        <td>&amp;times;</td>
        <td>×</td>
        <td>&amp;#215;</td>
        <td>multiply sign</td>
        <td>%D7</td>
        <td>p:before { content:"\00d7"; }</td>
        <td onclick="alert(&quot;\327&quot;)">alert("\327");</td>
      </tr>
      <tr>
        <td>&amp;Oslash;</td>
        <td>Ø</td>
        <td>&amp;#216;</td>
        <td>
          <p>capital O, slash</p>
        </td>
        <td>%D8</td>
        <td>p:before { content:"\00d8"; }</td>
        <td onclick="alert(&quot;\330&quot;)">alert("\330");</td>
      </tr>
      <tr>
        <td>&amp;Ugrave;</td>
        <td>Ù</td>
        <td>&amp;#217;</td>
        <td>capital U, grave accent</td>
        <td>%D9</td>
        <td>p:before { content:"\00d9"; }</td>
        <td onclick="alert(&quot;\331&quot;)">alert("\331");</td>
      </tr>
      <tr>
        <td>&amp;Uacute;</td>
        <td>Ú</td>
        <td>&amp;#218;</td>
        <td>capital U, acute accent</td>
        <td>%DA</td>
        <td>p:before { content:"\00da"; }</td>
        <td onclick="alert(&quot;\332&quot;)">alert("\332");</td>
      </tr>
      <tr>
        <td>&amp;Ucirc;</td>
        <td>Û</td>
        <td>&amp;#219;</td>
        <td>capital U, circumflex accent</td>
        <td>%DB</td>
        <td>p:before { content:"\00db"; }</td>
        <td onclick="alert(&quot;\333&quot;)">alert("\333");</td>
      </tr>
      <tr>
        <td>&amp;Uuml;</td>
        <td>Ü</td>
        <td>&amp;#220;</td>
        <td>capital U, dieresis or umlaut mark</td>
        <td>%DC</td>
        <td>p:before { content:"\00dc"; }</td>
        <td onclick="alert(&quot;\334&quot;)">alert("\334");</td>
      </tr>
      <tr>
        <td>&amp;Yacute;</td>
        <td>Ý</td>
        <td>&amp;#221;</td>
        <td>capital Y, acute accent</td>
        <td>%DD</td>
        <td>p:before { content:"\00dd"; }</td>
        <td onclick="alert(&quot;\335&quot;)">alert("\335");</td>
      </tr>
      <tr>
        <td>&amp;THORN;</td>
        <td>Þ</td>
        <td>&amp;#222;</td>
        <td>capital THORN, Icelandic</td>
        <td>%DE</td>
        <td>p:before { content:"\00de"; }</td>
        <td onclick="alert(&quot;\336&quot;)">alert("\336");</td>
      </tr>
      <tr>
        <td>&amp;szlig;</td>
        <td>ß</td>
        <td>&amp;#223;</td>
        <td>small sharp s, German (sz ligature)</td>
        <td>%DF</td>
        <td>p:before { content:"\00df"; }</td>
        <td onclick="alert(&quot;\337&quot;)">alert("\337");</td>
      </tr>
      <tr>
        <td>&amp;agrave;</td>
        <td>à</td>
        <td>&amp;#224;</td>
        <td>small a, grave accent</td>
        <td>%E0</td>
        <td>p:before { content:"\00e0"; }</td>
        <td onclick="alert(&quot;\340&quot;)">alert("\340");</td>
      </tr>
      <tr>
        <td>&amp;aacute;</td>
        <td>á</td>
        <td>&amp;#225;</td>
        <td>small a, acute accent</td>
        <td>%E1</td>
        <td>p:before { content:"\00e1"; }</td>
        <td onclick="alert(&quot;\341&quot;)">alert("\341");</td>
      </tr>
      <tr>
        <td>&amp;acirc;</td>
        <td>â</td>
        <td>&amp;#226;</td>
        <td>small a, circumflex accent</td>
        <td>%E2</td>
        <td>p:before { content:"\00e2"; }</td>
        <td onclick="alert(&quot;\342&quot;)">alert("\342");</td>
      </tr>
      <tr>
        <td>&amp;atilde;</td>
        <td>ã</td>
        <td>&amp;#227;</td>
        <td>small a, tilde</td>
        <td>%E3</td>
        <td>p:before { content:"\00e3"; }</td>
        <td onclick="alert(&quot;\343&quot;)">alert("\343");</td>
      </tr>
      <tr>
        <td>&amp;auml;</td>
        <td>ä</td>
        <td>&amp;#228;</td>
        <td>small a, dieresis or umlaut mark</td>
        <td>%E4</td>
        <td>p:before { content:"\00e4"; }</td>
        <td onclick="alert(&quot;\344&quot;)">alert("\344");</td>
      </tr>
      <tr>
        <td>&amp;aring;</td>
        <td>å</td>
        <td>&amp;#229;</td>
        <td>small a, ring</td>
        <td>%E5</td>
        <td>p:before { content:"\00e5"; }</td>
        <td onclick="alert(&quot;\345&quot;)">alert("\345");</td>
      </tr>
      <tr>
        <td>&amp;aelig;</td>
        <td>æ</td>
        <td>&amp;#230;</td>
        <td>small ae diphthong (ligature)</td>
        <td>%E6</td>
        <td>p:before { content:"\00e6"; }</td>
        <td onclick="alert(&quot;\346&quot;)">alert("\346");</td>
      </tr>
      <tr>
        <td>&amp;ccedil;</td>
        <td>ç</td>
        <td>&amp;#231;</td>
        <td>small c, cedilla</td>
        <td>%E7</td>
        <td>p:before { content:"\00e7"; }</td>
        <td onclick="alert(&quot;\347&quot;)">alert("\347");</td>
      </tr>
      <tr>
        <td>&amp;egrave;</td>
        <td>è</td>
        <td>&amp;#232;</td>
        <td>small e, grave accent</td>
        <td>%E8</td>
        <td>p:before { content:"\00e8"; }</td>
        <td onclick="alert(&quot;\350&quot;)">alert("\350");</td>
      </tr>
      <tr>
        <td>&amp;eacute;</td>
        <td>é</td>
        <td>&amp;#233;</td>
        <td>small e, acute accent</td>
        <td>%E9</td>
        <td>p:before { content:"\00e9"; }</td>
        <td onclick="alert(&quot;\351&quot;)">alert("\351");</td>
      </tr>
      <tr>
        <td>&amp;ecirc;</td>
        <td>ê</td>
        <td>&amp;#234;</td>
        <td>small e, circumflex accent</td>
        <td>%EA</td>
        <td>p:before { content:"\00ea"; }</td>
        <td onclick="alert(&quot;\352&quot;)">alert("\352");</td>
      </tr>
      <tr>
        <td>&amp;euml;</td>
        <td>ë</td>
        <td>&amp;#235;</td>
        <td>small e, dieresis or umlaut mark</td>
        <td>%EB</td>
        <td>p:before { content:"\00eb"; }</td>
        <td onclick="alert(&quot;\353&quot;)">alert("\353");</td>
      </tr>
      <tr>
        <td>&amp;igrave;</td>
        <td>ì</td>
        <td>&amp;#236;</td>
        <td>small i, grave accent</td>
        <td>%EC</td>
        <td>p:before { content:"\00ec"; }</td>
        <td onclick="alert(&quot;\354&quot;)">alert("\354");</td>
      </tr>
      <tr>
        <td>&amp;iacute;</td>
        <td>í</td>
        <td>&amp;#237;</td>
        <td>small i, acute accent</td>
        <td>%ED</td>
        <td>p:before { content:"\00ed"; }</td>
        <td onclick="alert(&quot;\355&quot;)">alert("\355");</td>
      </tr>
      <tr>
        <td>&amp;icirc;</td>
        <td>î</td>
        <td>&amp;#238;</td>
        <td>small i, circumflex accent</td>
        <td>%EE</td>
        <td>p:before { content:"\00ee"; }</td>
        <td onclick="alert(&quot;\356&quot;)">alert("\356");</td>
      </tr>
      <tr>
        <td>&amp;iuml;</td>
        <td>ï</td>
        <td>&amp;#239;</td>
        <td>small i, dieresis or umlaut mark</td>
        <td>%EF</td>
        <td>p:before { content:"\00ef"; }</td>
        <td onclick="alert(&quot;\357&quot;)">alert("\357");</td>
      </tr>
      <tr>
        <td>&amp;eth;</td>
        <td>ð</td>
        <td>&amp;#240;</td>
        <td>small eth, Icelandic</td>
        <td>%F0</td>
        <td>p:before { content:"\00f0"; }</td>
        <td onclick="alert(&quot;\360&quot;)">alert("\360");</td>
      </tr>
      <tr>
        <td>&amp;ntilde;</td>
        <td>ñ</td>
        <td>&amp;#241;</td>
        <td>small n, tilde</td>
        <td>%F1</td>
        <td>p:before { content:"\00f1"; }</td>
        <td onclick="alert(&quot;\361&quot;)">alert("\361");</td>
      </tr>
      <tr>
        <td>&amp;ograve;</td>
        <td>ò</td>
        <td>&amp;#242;</td>
        <td>small o, grave accent</td>
        <td>%F2</td>
        <td>p:before { content:"\00f2"; }</td>
        <td onclick="alert(&quot;\362&quot;)">alert("\362");</td>
      </tr>
      <tr>
        <td>&amp;oacute;</td>
        <td>ó</td>
        <td>&amp;#243;</td>
        <td>small o, acute accent</td>
        <td>%F3</td>
        <td>p:before { content:"\00f3"; }</td>
        <td onclick="alert(&quot;\363&quot;)">alert("\363");</td>
      </tr>
      <tr>
        <td>&amp;ocirc;</td>
        <td>ô</td>
        <td>&amp;#244;</td>
        <td>small o, circumflex accent</td>
        <td>%F4</td>
        <td>p:before { content:"\00f4"; }</td>
        <td onclick="alert(&quot;\364&quot;)">alert("\364");</td>
      </tr>
      <tr>
        <td>&amp;otilde;</td>
        <td>õ</td>
        <td>&amp;#245;</td>
        <td>small o, tilde</td>
        <td>%F5</td>
        <td>p:before { content:"\00f5"; }</td>
        <td onclick="alert(&quot;\365&quot;)">alert("\365");</td>
      </tr>
      <tr>
        <td>&amp;ouml;</td>
        <td>ö</td>
        <td>&amp;#246;</td>
        <td>small o, dieresis or umlaut mark</td>
        <td>%F6</td>
        <td>p:before { content:"\00f6"; }</td>
        <td onclick="alert(&quot;\366&quot;)">alert("\366");</td>
      </tr>
      <tr>
        <td>&amp;divide;</td>
        <td>÷</td>
        <td>&amp;#247;</td>
        <td>divide sign</td>
        <td>%F7</td>
        <td>p:before { content:"\00f7"; }</td>
        <td onclick="alert(&quot;\367&quot;)">alert("\367");</td>
      </tr>
      <tr>
        <td>&amp;oslash;</td>
        <td>ø</td>
        <td>&amp;#248;</td>
        <td>small o, slash</td>
        <td>%F8</td>
        <td>p:before { content:"\00f8"; }</td>
        <td onclick="alert(&quot;\370&quot;)">alert("\370");</td>
      </tr>
      <tr>
        <td>&amp;ugrave;</td>
        <td>ù</td>
        <td>&amp;#249;</td>
        <td>small u, grave accent</td>
        <td>%F9</td>
        <td>p:before { content:"\00f9"; }</td>
        <td onclick="alert(&quot;\371&quot;)">alert("\371");</td>
      </tr>
      <tr>
        <td>&amp;uacute;</td>
        <td>ú</td>
        <td>&amp;#250;</td>
        <td>small u, acute accent</td>
        <td>%FA</td>
        <td>p:before { content:"\00fa"; }</td>
        <td onclick="alert(&quot;\372&quot;)">alert("\372");</td>
      </tr>
      <tr>
        <td>&amp;ucirc;</td>
        <td>û</td>
        <td>&amp;#251;</td>
        <td>small u, circumflex accent</td>
        <td>%FB</td>
        <td>p:before { content:"\00fb"; }</td>
        <td onclick="alert(&quot;\373&quot;)">alert("\373");</td>
      </tr>
      <tr>
        <td>&amp;uuml;</td>
        <td>ü</td>
        <td>&amp;#252;</td>
        <td>small u, dieresis or umlaut mark</td>
        <td>%FC</td>
        <td>p:before { content:"\00fc"; }</td>
        <td onclick="alert(&quot;\374&quot;)">alert("\374");</td>
      </tr>
      <tr>
        <td>&amp;yacute;</td>
        <td>ý</td>
        <td>&amp;#253;</td>
        <td>small y, acute accent</td>
        <td>%FD</td>
        <td>p:before { content:"\00fd"; }</td>
        <td onclick="alert(&quot;\375&quot;)">alert("\375");</td>
      </tr>
      <tr>
        <td>&amp;thorn;</td>
        <td>þ</td>
        <td>&amp;#254;</td>
        <td>small thorn, Icelandic</td>
        <td>%FE</td>
        <td>p:before { content:"\00fe"; }</td>
        <td onclick="alert(&quot;\376&quot;)">alert("\376");</td>
      </tr>
      <tr>
        <td>&amp;yuml;</td>
        <td>ÿ</td>
        <td>&amp;#255;</td>
        <td>small y, dieresis or umlaut mark</td>
        <td>%FF</td>
        <td>p:before { content:"\00ff"; }</td>
        <td onclick="alert(&quot;\377&quot;)">alert("\377");</td>
      </tr>
    </tbody>
  </table>
  <h3>Latin Extended-A</h3>
  <table class="entities_num">
    <tbody>
      <tr>
        <td>&amp;OElig;</td>
        <td>Œ</td>
        <td>&amp;#338;</td>
        <td>latin capital ligature oe</td>
        <td>u+0152 ISOlat2</td>
        <td>p:before { content:"\0152"; }</td>
        <td onclick="alert(&quot;\u0152&quot;)">alert("\u0152");</td>
      </tr>
      <tr>
        <td>&amp;oelig;</td>
        <td>œ</td>
        <td>&amp;#339;</td>
        <td>latin small ligature oe<br>
        (ligature is a misnomer, this is a separate character in some languages)</td>
        <td>u+0153 ISOlat2</td>
        <td>p:before { content:"\0153"; }</td>
        <td onclick="alert(&quot;\u0152&quot;)">alert("\u0153");</td>
      </tr>
      <tr>
        <td>&amp;Scaron;</td>
        <td>Š</td>
        <td>&amp;#352;</td>
        <td>latin capital letter s with caron</td>
        <td>u+0160 ISOlat2</td>
        <td>p:before { content:"\0160"; }</td>
        <td onclick="alert(&quot;\u0160&quot;)">alert("\u0160");</td>
      </tr>
      <tr>
        <td>&amp;scaron;</td>
        <td>š</td>
        <td>&amp;#353;</td>
        <td>latin small letter s with caron</td>
        <td>u+0161 ISOlat2</td>
        <td>p:before { content:"\0161"; }</td>
        <td onclick="alert(&quot;\u0161&quot;)">alert("\u0161");</td>
      </tr>
      <tr>
        <td>&amp;Yuml;</td>
        <td>Ÿ</td>
        <td>&amp;#376;</td>
        <td>latin capital letter y with diaeresis</td>
        <td>u+0178 ISOlat2</td>
        <td>p:before { content:"\0178"; }</td>
        <td onclick="alert(&quot;\u0178&quot;)">alert("\u0178");</td>
      </tr>
    </tbody>
  </table>
  <h3>Latin Extended-B</h3>
  <table class="entities_num">
    <tbody>
      <tr>
        <td>&amp;fnof;</td>
        <td>ƒ</td>
        <td>&amp;#402;</td>
        <td>latin small f with hook, a.k.a. function, a.k.a. florin</td>
        <td>u+0192 ISOtech</td>
        <td>p:before { content:"\0192"; }</td>
        <td onclick="alert(&quot;\u0192&quot;)">alert("\u0192");</td>
      </tr>
    </tbody>
  </table>
  <h3>Spacing Modifier Letters</h3>
  <table class="entities_num">
    <tbody>
      <tr>
        <td>&amp;circ;</td>
        <td>ˆ</td>
        <td>modifier letter circumflex accent</td>
        <td>u+02C6 ISOpub</td>
        <td>p:before { content:"\02c6"; }</td>
        <td onclick="alert(&quot;\u02c6&quot;)">alert("\u02c6");</td>
      </tr>
      <tr>
        <td>&amp;tilde;</td>
        <td>˜</td>
        <td>small tilde</td>
        <td>u+02DC ISOdia</td>
        <td>p:before { content:"\02dc"; }</td>
        <td onclick="alert(&quot;\u02dc&quot;)">alert("\u02dc");</td>
      </tr>
    </tbody>
  </table>
  <ph3>Greek
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;Alpha;</td>
          <td>Α</td>
          <td>&amp;#913;</td>
          <td>greek capital letter alpha</td>
          <td>u+0391</td>
          <td>p:before { content:"\0391"; }</td>
          <td onclick="alert(&quot;\u0391&quot;)">alert("\u0391");</td>
        </tr>
        <tr>
          <td>&amp;Beta;</td>
          <td>Β</td>
          <td>&amp;#914;</td>
          <td>greek capital letter beta</td>
          <td>u+0392</td>
          <td>p:before { content:"\0392"; }</td>
          <td onclick="alert(&quot;\u0392&quot;)">alert("\u0392");</td>
        </tr>
        <tr>
          <td>&amp;Gamma;</td>
          <td>Γ</td>
          <td>&amp;#915;</td>
          <td>greek capital letter gamma</td>
          <td>u+0393 ISOgrk3</td>
          <td>p:before { content:"\0393"; }</td>
          <td onclick="alert(&quot;\u0393&quot;)">alert("\u0395");</td>
        </tr>
        <tr>
          <td>&amp;Delta;</td>
          <td>Δ</td>
          <td>&amp;#916;</td>
          <td>greek capital letter delta</td>
          <td>u+0394 ISOgrk3</td>
          <td>p:before { content:"\0394"; }</td>
          <td onclick="alert(&quot;\u0394&quot;)">alert("\u0394");</td>
        </tr>
        <tr>
          <td>&amp;Epsilon;</td>
          <td>Ε</td>
          <td>&amp;#917;</td>
          <td>greek capital letter epsilon</td>
          <td>u+0395</td>
          <td>p:before { content:"\0395"; }</td>
          <td onclick="alert(&quot;\u0395&quot;)">alert("\u0395");</td>
        </tr>
        <tr>
          <td>&amp;Zeta;</td>
          <td>Ζ</td>
          <td>&amp;#918;</td>
          <td>greek capital letter zeta</td>
          <td>u+0396</td>
          <td>p:before { content:"\0396"; }</td>
          <td onclick="alert(&quot;\u0396&quot;)">alert("\u0396");</td>
        </tr>
        <tr>
          <td>&amp;Eta ;</td>
          <td>Η</td>
          <td>&amp;#919;</td>
          <td>greek capital letter eta</td>
          <td>u+0397</td>
          <td>p:before { content:"\0397"; }</td>
          <td onclick="alert(&quot;\u0397&quot;)">alert("\u0397");</td>
        </tr>
        <tr>
          <td>&amp;Theta;</td>
          <td>Θ</td>
          <td>&amp;#920;</td>
          <td>greek capital letter theta</td>
          <td>u+0398 ISOgrk3</td>
          <td>p:before { content:"\0398"; }</td>
          <td onclick="alert(&quot;\u0398&quot;)">alert("\u0398");</td>
        </tr>
        <tr>
          <td>&amp;Iota;</td>
          <td>Ι</td>
          <td>&amp;#921;</td>
          <td>greek capital letter iota</td>
          <td>u+0399</td>
          <td>p:before { content:"\0399"; }</td>
          <td onclick="alert(&quot;\u0399&quot;)">alert("\u0399");</td>
        </tr>
        <tr>
          <td>&amp;Kappa;</td>
          <td>Κ</td>
          <td>&amp;#922;</td>
          <td>greek capital letter kappa</td>
          <td>u+039A</td>
          <td>p:before { content:"\039a"; }</td>
          <td onclick="alert(&quot;\u039a&quot;)">alert("\u039a");</td>
        </tr>
        <tr>
          <td>&amp;Lambda;</td>
          <td>Λ</td>
          <td>&amp;#923;</td>
          <td>greek capital letter lambda</td>
          <td>u+039B ISOgrk3</td>
          <td>p:before { content:"\039b"; }</td>
          <td onclick="alert(&quot;\u039b&quot;)">alert("\u039b");</td>
        </tr>
        <tr>
          <td>&amp;Mu  ;</td>
          <td>Μ</td>
          <td>&amp;#924;</td>
          <td>greek capital letter mu</td>
          <td>u+039C</td>
          <td>p:before { content:"\039c"; }</td>
          <td onclick="alert(&quot;\u039c&quot;)">alert("\u039c");</td>
        </tr>
        <tr>
          <td>&amp;Nu  ;</td>
          <td>Ν</td>
          <td>&amp;#925;</td>
          <td>greek capital letter nu</td>
          <td>u+039D</td>
          <td>p:before { content:"\039d"; }</td>
          <td onclick="alert(&quot;\u039D&quot;)">alert("\u039D");</td>
        </tr>
        <tr>
          <td>&amp;Xi  ;</td>
          <td>Ξ</td>
          <td>&amp;#926;</td>
          <td>greek capital letter xi</td>
          <td>u+039E ISOgrk3</td>
          <td>p:before { content:"\039e"; }</td>
          <td onclick="alert(&quot;\u039e&quot;)">alert("\u039e");</td>
        </tr>
        <tr>
          <td>&amp;Omicron;</td>
          <td>Ο</td>
          <td>&amp;#927;</td>
          <td>greek capital letter omicron</td>
          <td>u+039F</td>
          <td>p:before { content:"\039f"; }</td>
          <td onclick="alert(&quot;\u039f&quot;)">alert("\u039f");</td>
        </tr>
        <tr>
          <td>&amp;Pi  ;</td>
          <td>Π</td>
          <td>&amp;#928;</td>
          <td>greek capital letter pi</td>
          <td>u+03A0 ISOgrk3</td>
          <td>p:before { content:"\03a0"; }</td>
          <td onclick="alert(&quot;\u03a0&quot;)">alert("\u03a0");</td>
        </tr>
        <tr>
          <td>&amp;Rho ;</td>
          <td>Ρ</td>
          <td>&amp;#929;</td>
          <td>greek capital letter rho</td>
          <td>u+03A1</td>
          <td>p:before { content:"\03a1"; }</td>
          <td onclick="alert(&quot;\u03a1&quot;)">alert("\u03a1");</td>
        </tr>
        <tr>
          <td colspan="7">there is no Sigmaf, and no u+03A2 character either)</td>
        </tr>
        <tr>
          <td>&amp;Sigma;</td>
          <td>Σ</td>
          <td>&amp;#931;</td>
          <td>greek capital letter sigma</td>
          <td>u+03A3 ISOgrk3</td>
          <td>p:before { content:"\03a3"; }</td>
          <td onclick="alert(&quot;\u03a3&quot;)">alert("\u03A3");</td>
        </tr>
        <tr>
          <td>&amp;Tau ;</td>
          <td>Τ</td>
          <td>&amp;#932;</td>
          <td>greek capital letter tau</td>
          <td>u+03A4</td>
          <td>p:before { content:"\03a4"; }</td>
          <td onclick="alert(&quot;\u03A4&quot;)">alert("\u03A4");</td>
        </tr>
        <tr>
          <td>&amp;Upsilon;</td>
          <td>Υ</td>
          <td>&amp;#933;</td>
          <td>greek capital letter upsilon</td>
          <td>u+03A5 ISOgrk3</td>
          <td>p:before { content:"\03a5"; }</td>
          <td onclick="alert(&quot;\u03A5&quot;)">alert("\u03A5");</td>
        </tr>
        <tr>
          <td>&amp;Phi ;</td>
          <td>Φ</td>
          <td>&amp;#934;</td>
          <td>greek capital letter phi</td>
          <td>u+03A6 ISOgrk3</td>
          <td>p:before { content:"\03a6"; }</td>
          <td onclick="alert(&quot;\u03A6&quot;)">alert("\u03A6");</td>
        </tr>
        <tr>
          <td>&amp;Chi ;</td>
          <td>Χ</td>
          <td>&amp;#935;</td>
          <td>greek capital letter chi</td>
          <td>u+03A7</td>
          <td>p:before { content:"\03a7"; }</td>
          <td onclick="alert(&quot;\u03A7&quot;)">alert("\u03A7");</td>
        </tr>
        <tr>
          <td>&amp;Psi ;</td>
          <td>Ψ</td>
          <td>&amp;#936;</td>
          <td>greek capital letter psi</td>
          <td>u+03A8 ISOgrk3</td>
          <td>p:before { content:"\03a8"; }</td>
          <td onclick="alert(&quot;\u03A8&quot;)">alert("\u03A8");</td>
        </tr>
        <tr>
          <td>&amp;Omega;</td>
          <td>Ω</td>
          <td>&amp;#937;</td>
          <td>greek capital letter omega</td>
          <td>u+03A9 ISOgrk3</td>
          <td>p:before { content:"\03a9"; }</td>
          <td onclick="alert(&quot;\u03A9&quot;)">alert("\u03A9");</td>
        </tr>
        <tr>
          <td>&amp;alpha;</td>
          <td>α</td>
          <td>&amp;#945;</td>
          <td>greek small letter alpha</td>
          <td>u+03B1 ISOgrk3</td>
          <td>p:before { content:"\03b1"; }</td>
          <td onclick="alert(&quot;\u03b1&quot;)">alert("\u03b1");</td>
        </tr>
        <tr>
          <td>&amp;beta;</td>
          <td>β</td>
          <td>&amp;#946;</td>
          <td>greek small letter beta</td>
          <td>u+03B2 ISOgrk3</td>
          <td>p:before { content:"\03b2"; }</td>
          <td onclick="alert(&quot;\u03b2&quot;)">alert("\u03b2");</td>
        </tr>
        <tr>
          <td>&amp;gamma;</td>
          <td>γ</td>
          <td>&amp;#947;</td>
          <td>greek small letter gamma</td>
          <td>u+03B3 ISOgrk3</td>
          <td>p:before { content:"\03b3"; }</td>
          <td onclick="alert(&quot;\u03b3&quot;)">alert("\u03b3");</td>
        </tr>
        <tr>
          <td>&amp;delta;</td>
          <td>δ</td>
          <td>&amp;#948;</td>
          <td>greek small letter delta</td>
          <td>u+03B4 ISOgrk3</td>
          <td>p:before { content:"\03b4"; }</td>
          <td onclick="alert(&quot;\u03b4&quot;)">alert("\u03b4");</td>
        </tr>
        <tr>
          <td>&amp;epsilon;</td>
          <td>ε</td>
          <td>&amp;#949;</td>
          <td>greek small letter epsilon</td>
          <td>u+03B5 ISOgrk3</td>
          <td>p:before { content:"\03b5"; }</td>
          <td onclick="alert(&quot;\u03b5&quot;)">alert("\u03b5");</td>
        </tr>
        <tr>
          <td>&amp;zeta;</td>
          <td>ζ</td>
          <td>&amp;#950;</td>
          <td>greek small letter zeta</td>
          <td>u+03B6 ISOgrk3</td>
          <td>p:before { content:"\03b6"; }</td>
          <td onclick="alert(&quot;\u03b6&quot;)">alert("\u03b6");</td>
        </tr>
        <tr>
          <td>&amp;eta ;</td>
          <td>η</td>
          <td>&amp;#951;</td>
          <td>greek small letter eta</td>
          <td>u+03B7 ISOgrk3</td>
          <td>p:before { content:"\03b7"; }</td>
          <td onclick="alert(&quot;\u03b7&quot;)">alert("\u03b7");</td>
        </tr>
        <tr>
          <td>&amp;theta;</td>
          <td>θ</td>
          <td>&amp;#952;</td>
          <td>greek small letter theta</td>
          <td>u+03B8 ISOgrk3</td>
          <td>p:before { content:"\03b8"; }</td>
          <td onclick="alert(&quot;\u03b8&quot;)">alert("\u03b8");</td>
        </tr>
        <tr>
          <td>&amp;iota;</td>
          <td>ι</td>
          <td>&amp;#953;</td>
          <td>greek small letter iota</td>
          <td>u+03B9 ISOgrk3</td>
          <td>p:before { content:"\03b9"; }</td>
          <td onclick="alert(&quot;\u03b9&quot;)">alert("\u03b9");</td>
        </tr>
        <tr>
          <td>&amp;kappa;</td>
          <td>κ</td>
          <td>&amp;#954;</td>
          <td>greek small letter kappa</td>
          <td>u+03BA ISOgrk3</td>
          <td>p:before { content:"\03ba"; }</td>
          <td onclick="alert(&quot;\u03ba&quot;)">alert("\u03ba");</td>
        </tr>
        <tr>
          <td>&amp;lambda;</td>
          <td>λ</td>
          <td>&amp;#955;</td>
          <td>greek small letter lambda</td>
          <td>u+03BB ISOgrk3</td>
          <td>p:before { content:"\03bb"; }</td>
          <td onclick="alert(&quot;\u03bb&quot;)">alert("\u03bb");</td>
        </tr>
        <tr>
          <td>&amp;mu  ;</td>
          <td>μ</td>
          <td>&amp;#956;</td>
          <td>greek small letter mu</td>
          <td>u+03BC ISOgrk3</td>
          <td>p:before { content:"\03bc"; }</td>
          <td onclick="alert(&quot;\u03bc&quot;)">alert("\u03bc");</td>
        </tr>
        <tr>
          <td>&amp;nu  ;</td>
          <td>ν</td>
          <td>&amp;#957;</td>
          <td>greek small letter nu</td>
          <td>u+03BD ISOgrk3</td>
          <td>p:before { content:"\03bd"; }</td>
          <td onclick="alert(&quot;\u03bd&quot;)">alert("\u03bd");</td>
        </tr>
        <tr>
          <td>&amp;xi  ;</td>
          <td>ξ</td>
          <td>&amp;#958;</td>
          <td>greek small letter xi</td>
          <td>u+03BE ISOgrk3</td>
          <td>p:before { content:"\03be"; }</td>
          <td onclick="alert(&quot;\u03be&quot;)">alert("\u03be");</td>
        </tr>
        <tr>
          <td>&amp;omicron;</td>
          <td>ο</td>
          <td>&amp;#959;</td>
          <td>greek small letter omicron</td>
          <td>u+03BF NEW</td>
          <td>p:before { content:"\03bf"; }</td>
          <td onclick="alert(&quot;\u03bf&quot;)">alert("\u03bf");</td>
        </tr>
        <tr>
          <td>&amp;pi  ;</td>
          <td>π</td>
          <td>&amp;#960;</td>
          <td>greek small letter pi</td>
          <td>u+03C0 ISOgrk3</td>
          <td>p:before { content:"\03c0"; }</td>
          <td onclick="alert(&quot;\u03c0&quot;)">alert("\u03c0");</td>
        </tr>
        <tr>
          <td>&amp;rho ;</td>
          <td>ρ</td>
          <td>&amp;#961;</td>
          <td>greek small letter rho</td>
          <td>u+03C1 ISOgrk3</td>
          <td>p:before { content:"\03c1"; }</td>
          <td onclick="alert(&quot;\u03c1&quot;)">alert("\u03c1");</td>
        </tr>
        <tr>
          <td>&amp;sigmaf;</td>
          <td>ς</td>
          <td>&amp;#962;</td>
          <td>greek small letter final sigma</td>
          <td>u+03C2 ISOgrk3</td>
          <td>p:before { content:"\03C2"; }</td>
          <td onclick="alert(&quot;\u03c2&quot;)">alert("\u03c2");</td>
        </tr>
        <tr>
          <td>&amp;sigma;</td>
          <td>σ</td>
          <td>&amp;#963;</td>
          <td>greek small letter sigma</td>
          <td>u+03C3 ISOgrk3</td>
          <td>p:before { content:"\03C3"; }</td>
          <td onclick="alert(&quot;\u03c3&quot;)">alert("\u03c3");</td>
        </tr>
        <tr>
          <td>&amp;tau ;</td>
          <td>τ</td>
          <td>&amp;#964;</td>
          <td>greek small letter tau</td>
          <td>u+03C4 ISOgrk3</td>
          <td>p:before { content:"\03C4"; }</td>
          <td onclick="alert(&quot;\u03c4&quot;)">alert("\u03c4");</td>
        </tr>
        <tr>
          <td>&amp;upsilon;</td>
          <td>υ</td>
          <td>&amp;#965;</td>
          <td>greek small letter upsilon</td>
          <td>u+03C5 ISOgrk3</td>
          <td>p:before { content:"\03C5"; }</td>
          <td onclick="alert(&quot;\u03c5&quot;)">alert("\u03c5");</td>
        </tr>
        <tr>
          <td>&amp;phi ;</td>
          <td>φ</td>
          <td>&amp;#966;</td>
          <td>greek small letter phi</td>
          <td>u+03C6 ISOgrk3</td>
          <td>p:before { content:"\03C6"; }</td>
          <td onclick="alert(&quot;\u03c6&quot;)">alert("\03c6");</td>
        </tr>
        <tr>
          <td>&amp;chi ;</td>
          <td>χ</td>
          <td>&amp;#967;</td>
          <td>greek small letter chi</td>
          <td>u+03C7 ISOgrk3</td>
          <td>p:before { content:"\03C7"; }</td>
          <td onclick="alert(&quot;\u03c7&quot;)">alert("\u03c7");</td>
        </tr>
        <tr>
          <td>&amp;psi ;</td>
          <td>ψ</td>
          <td>&amp;#968;</td>
          <td>greek small letter psi</td>
          <td>u+03C8 ISOgrk3</td>
          <td>p:before { content:"\03C8"; }</td>
          <td onclick="alert(&quot;\u03c8&quot;)">alert("\u03c8");</td>
        </tr>
        <tr>
          <td>&amp;omega;</td>
          <td>ω</td>
          <td>&amp;#969;</td>
          <td>greek small letter omega</td>
          <td>u+03C9 ISOgrk3</td>
          <td>p:before { content:"\03C9"; }</td>
          <td onclick="alert(&quot;\u03c9&quot;)">alert("\u03c9");</td>
        </tr>
        <tr>
          <td>&amp;thetasym;</td>
          <td>ϑ</td>
          <td>&amp;#977;</td>
          <td>greek small letter theta symbol</td>
          <td>u+03D1 NEW</td>
          <td>p:before { content:"\03D1"; }</td>
          <td onclick="alert(&quot;\u03D1&quot;)">alert("\u03D1");</td>
        </tr>
        <tr>
          <td>&amp;upsih;</td>
          <td>ϒ</td>
          <td>&amp;#978;</td>
          <td>greek upsilon with hook symbol</td>
          <td>u+03D2 NEW</td>
          <td>p:before { content:"\03D2"; }</td>
          <td onclick="alert(&quot;\u03D2&quot;)">alert("\u03D2");</td>
        </tr>
        <tr>
          <td>&amp;piv ;</td>
          <td>ϖ</td>
          <td>&amp;#982;</td>
          <td>greek pi symbol</td>
          <td>u+03D6 ISOgrk3</td>
          <td>p:before { content:"\03D6"; }</td>
          <td onclick="alert(&quot;\u03D6&quot;)">alert("\u03D6");</td>
        </tr>
      </tbody>
    </table>
    <h3>Punctuation</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;ensp;</td>
          <td>&ensp;</td>
          <td>&amp;#8194;</td>
          <td>en space</td>
          <td>u+2002 ISOpub</td>
          <td>p:before { content:"\2002";}</td>
          <td onclick="alert(&quot;\u2002&quot;)">alert("\u2002");</td>
        </tr>
        <tr>
          <td>&amp;emsp;</td>
          <td>&emsp;</td>
          <td>&amp;#8195;</td>
          <td>em space</td>
          <td>u+2003 ISOpub</td>
          <td>p:before { content:"\2003";}</td>
          <td onclick="alert(&quot;\u2003&quot;)">alert("\u2003");</td>
        </tr>
        <tr>
          <td>&amp;thinsp;</td>
          <td>&thinsp;</td>
          <td>&amp;#8201;</td>
          <td>thin space</td>
          <td>u+2009 ISOpub</td>
          <td>p:before { content:"\2009";}</td>
          <td onclick="alert(&quot;\u2009&quot;)">alert("\u2009");</td>
        </tr>
        <tr>
          <td>&amp;zwnj;</td>
          <td>&zwnj;</td>
          <td>&amp;#8204;</td>
          <td>zero width non-joiner</td>
          <td>u+200C NEW RFC 2070</td>
          <td>p:before { content:"\200C";}</td>
          <td onclick="alert(&quot;\u200C&quot;)">alert("\u200C");</td>
        </tr>
        <tr>
          <td>&amp;zwj;</td>
          <td>&zwj;</td>
          <td>&amp;#8205;</td>
          <td>zero width joiner</td>
          <td>u+200D NEW RFC 2070</td>
          <td>p:before { content:"\200D";}</td>
          <td onclick="alert(&quot;\u200d&quot;)">alert("\u200d");</td>
        </tr>
        <tr>
          <td>&amp;lrm;</td>
          <td>&lrm;</td>
          <td>&amp;#8206;</td>
          <td>left-to-right mark</td>
          <td>u+200E NEW RFC 2070</td>
          <td>p:before { content:"\200E";}</td>
          <td onclick="alert(&quot;\u200e&quot;)">alert("\u200e");</td>
        </tr>
        <tr>
          <td>&amp;rlm;</td>
          <td>&rlm;</td>
          <td>&amp;#8207;</td>
          <td>right-to-left mark</td>
          <td>u+200F NEW RFC 2070</td>
          <td>p:before { content:"\200F";}</td>
          <td onclick="alert(&quot;\u200f&quot;)">alert("\u200f");</td>
        </tr>
        <tr>
          <td>&amp;ndash;</td>
          <td>–</td>
          <td>&amp;#8211;</td>
          <td>en dash</td>
          <td>u+2013 ISOpub</td>
          <td>p:before { content:"\2013";}</td>
          <td onclick="alert(&quot;\u2013&quot;)">alert("\u2013");</td>
        </tr>
        <tr>
          <td>&amp;mdash;</td>
          <td>—</td>
          <td>&amp;#8212;</td>
          <td>em dash</td>
          <td>u+2014 ISOpub</td>
          <td>p:before { content:"\2014";}</td>
          <td onclick="alert(&quot;\u2014&quot;)">alert("\u2014");</td>
        </tr>
        <tr>
          <td>&amp;lsquo;</td>
          <td>‘</td>
          <td>&amp;#8216;</td>
          <td>left single quotation mark</td>
          <td>u+2018 ISOnum</td>
          <td>p:before { content:"\2018";}</td>
          <td onclick="alert(&quot;\u2018&quot;)">alert("\u2018");</td>
        </tr>
        <tr>
          <td>&amp;rsquo;</td>
          <td>’</td>
          <td>&amp;#8217;</td>
          <td>right single quotation mark</td>
          <td>u+2019 ISOnum</td>
          <td>p:before { content:"\2019";}</td>
          <td onclick="alert(&quot;\u2019&quot;)">alert("\u2019");</td>
        </tr>
        <tr>
          <td>&amp;sbquo;</td>
          <td>‚</td>
          <td>&amp;#8218;</td>
          <td>single low-9 quotation mark</td>
          <td>u+201A NEW</td>
          <td>p:before { content:"\201A";}</td>
          <td onclick="alert(&quot;\u201a&quot;)">alert("\u201a");</td>
        </tr>
        <tr>
          <td>&amp;ldquo;</td>
          <td>“</td>
          <td>&amp;#8220;</td>
          <td>left double quotation mark</td>
          <td>u+201C ISOnum</td>
          <td>p:before { content:"\201C";}</td>
          <td onclick="alert(&quot;\u201c&quot;)">alert("\u201c");</td>
        </tr>
        <tr>
          <td>&amp;rdquo;</td>
          <td>”</td>
          <td>&amp;#8221;</td>
          <td>right double quotation mark</td>
          <td>u+201D ISOnum</td>
          <td>p:before { content:"\201D";}</td>
          <td onclick="alert(&quot;\u201d&quot;)">alert("\u201d");</td>
        </tr>
        <tr>
          <td>&amp;bdquo;</td>
          <td>„</td>
          <td>&amp;#8222;</td>
          <td>double low-9 quotation mark</td>
          <td>u+201E NEW</td>
          <td>p:before { content:"\201E";}</td>
          <td onclick="alert(&quot;\u201e&quot;)">alert("\u201e");</td>
        </tr>
        <tr>
          <td>&amp;dagger;</td>
          <td>†</td>
          <td>&amp;#8224;</td>
          <td>dagger</td>
          <td>u+2020 ISOpub</td>
          <td>p:before { content:"\2020";}</td>
          <td onclick="alert(&quot;\u2020&quot;)">alert("\u2020");</td>
        </tr>
        <tr>
          <td>&amp;Dagger;</td>
          <td>‡</td>
          <td>&amp;#8225;</td>
          <td>double dagger</td>
          <td>u+2021 ISOpub</td>
          <td>p:before { content:"\2021";}</td>
          <td onclick="alert(&quot;\u2021&quot;)">alert("\u2021");</td>
        </tr>
        <tr>
          <td>&amp;permil;</td>
          <td>‰</td>
          <td>&amp;#8240;</td>
          <td>per mille sign</td>
          <td>u+2030 ISOtech</td>
          <td>p:before { content:"\2030";}</td>
          <td onclick="alert(&quot;\u2030&quot;)">alert("\u2030");</td>
        </tr>
        <tr>
          <td>&amp;lsaquo;</td>
          <td>‹</td>
          <td>&amp;#8249;</td>
          <td>single left-pointing angle quotation mark<br>
          (lsaquo is proposed but not yet ISO standardised)</td>
          <td>u+2039 ISO proposed</td>
          <td>p:before { content:"\2039";}</td>
          <td onclick="alert(&quot;\u2039&quot;)">alert("\u2039");</td>
        </tr>
        <tr>
          <td>&amp;rsaquo;</td>
          <td>›</td>
          <td>&amp;#8250;</td>
          <td>single right-pointing angle quotation mark<br>
          rsaquo is proposed but not yet ISO standardised</td>
          <td>u+203A ISO proposed</td>
          <td>p:before { content:"\203A";}</td>
          <td onclick="alert(&quot;\u203a&quot;)">alert("\u203a");</td>
        </tr>
      </tbody>
    </table>
    <p class="entities">General Punctuation</p>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;bull;</td>
          <td>•</td>
          <td>&amp;#8226;</td>
          <td>bullet, a.k.a. black small circle<br>
          bullet is NOT the same as bullet operator — u+2219</td>
          <td>u+2022 ISOpub </td>
          <td onclick="alert(&quot;\u2219&quot;)">alert("\u2219");</td>
        </tr>
        <tr>
          <td>&amp;hellip;</td>
          <td>…</td>
          <td>&amp;#8230;</td>
          <td>horizontal ellipsis, a.k.a. three dot leader</td>
          <td>u+2026 ISOpub </td>
          <td onclick="alert(&quot;\u2026&quot;)">alert("\u2026");</td>
        </tr>
        <tr>
          <td>&amp;prime;</td>
          <td>′</td>
          <td>&amp;#8242;</td>
          <td>prime, a.k.a. minutes, a.k.a. feet</td>
          <td>u+2032 ISOtech</td>
          <td onclick="alert(&quot;\u2032&quot;)">alert("\u2032");</td>
        </tr>
        <tr>
          <td>&amp;Prime;</td>
          <td>″</td>
          <td>&amp;#8243;</td>
          <td>double prime, a.k.a. seconds, a.k.a. inches</td>
          <td>u+2033 ISOtech</td>
          <td onclick="alert(&quot;\u2033&quot;)">alert("\u2033");</td>
        </tr>
        <tr>
          <td>&amp;oline;</td>
          <td>‾</td>
          <td>&amp;#8254;</td>
          <td>overline, a.k.a. spacing overscore</td>
          <td>u+203E NEW</td>
          <td onclick="alert(&quot;\u203e&quot;)">alert("\u203e");</td>
        </tr>
        <tr>
          <td>&amp;frasl;</td>
          <td>⁄</td>
          <td>&amp;#8260;</td>
          <td>fraction slash</td>
          <td>u+2044 NEW</td>
          <td onclick="alert(&quot;\u8260&quot;)">alert("\u8260");</td>
        </tr>
      </tbody>
    </table>
    <h3>Letterlike Symbols</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;weierp;</td>
          <td>℘</td>
          <td>&amp;#8472;</td>
          <td>script capital P, a.k.a. power set, a.k.a. Weierstrass p</td>
          <td>u+2118 ISOamso</td>
          <td onclick="alert(&quot;\u2118&quot;)">alert("\u2118");</td>
        </tr>
        <tr>
          <td>&amp;image;</td>
          <td>ℑ</td>
          <td>&amp;#8465;</td>
          <td>blackletter capital I, a.k.a. imaginary part</td>
          <td>u+2111 ISOamso</td>
          <td onclick="alert(&quot;\u2111&quot;)">alert("\u2111");</td>
        </tr>
        <tr>
          <td>&amp;real;</td>
          <td>ℜ</td>
          <td>&amp;#8476;</td>
          <td>blackletter capital R, a.k.a. real part symbol</td>
          <td>u+211C ISOamso</td>
          <td onclick="alert(&quot;\u211c&quot;)">alert("\u211c");</td>
        </tr>
        <tr>
          <td>&amp;trade;</td>
          <td>™</td>
          <td>&amp;#8482;</td>
          <td>trade mark sign</td>
          <td>u+2122 ISOnum</td>
          <td onclick="alert(&quot;\u2122&quot;)">alert("\u2122");</td>
        </tr>
        <tr>
          <td>&amp;alefsym;</td>
          <td>ℵ</td>
          <td>&amp;#8501;</td>
          <td>alef symbol, a.k.a. first transfinite cardinal<br>
            alef symbol is NOT the same as hebrew letter alef — u+05D0 although the same glyph<br>
          could be used to depict both characters</td>
          <td>u+2135 NEW</td>
          <td onclick="alert(&quot;\u&quot;)">alert("\u");</td>
        </tr>
      </tbody>
    </table>
    <h3>Arrows</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;larr;</td>
          <td>←</td>
          <td>&amp;#8592;</td>
          <td>leftwards arrow</td>
          <td>u+2190 ISOnum</td>
          <td onclick="alert(&quot;\u2190&quot;)">alert("\u2190");</td>
        </tr>
        <tr>
          <td>&amp;uarr;</td>
          <td>↑</td>
          <td>&amp;#8593;</td>
          <td>upwards arrow</td>
          <td>u+2191 ISOnum</td>
          <td onclick="alert(&quot;\u2191&quot;)">alert("\u2191");</td>
        </tr>
        <tr>
          <td>&amp;rarr;</td>
          <td>→</td>
          <td>&amp;#8594;</td>
          <td>rightwards arrow</td>
          <td>u+2192 ISOnum</td>
          <td onclick="alert(&quot;\u2192&quot;)">alert("\u2192");</td>
        </tr>
        <tr>
          <td>&amp;darr;</td>
          <td>↓</td>
          <td>&amp;#8595;</td>
          <td>downwards arrow</td>
          <td>u+2193 ISOnum</td>
          <td onclick="alert(&quot;\u2193&quot;)">alert("\u2193");</td>
        </tr>
        <tr>
          <td>&amp;harr;</td>
          <td>↔</td>
          <td>&amp;#8596;</td>
          <td>left right arrow</td>
          <td>u+2194 ISOamsa</td>
          <td onclick="alert(&quot;\u2194&quot;)">alert("\u2194");</td>
        </tr>
        <tr>
          <td>&amp;crarr;</td>
          <td>↵</td>
          <td>&amp;#8629;</td>
          <td>downwards arrow with corner leftwards, a.k.a. carriage return</td>
          <td>u+21B5 NEW</td>
          <td onclick="alert(&quot;\u21b5&quot;)">alert("\u21b5");</td>
        </tr>
        <tr>
          <td>&amp;lArr;</td>
          <td>⇐</td>
          <td>&amp;#8656;</td>
          <td>leftwards double arrow<br>can be used for ‘is implied by’</td>
          <td>u+21D0 ISOtech</td>
          <td onclick="alert(&quot;\u21d0&quot;)">alert("\u21d0");</td>
        </tr>
        <tr>
          <td>&amp;uArr;</td>
          <td>⇑</td>
          <td>&amp;#8657;</td>
          <td>upwards double arrow</td>
          <td>u+21D1 ISOamsa</td>
          <td onclick="alert(&quot;\u21d1&quot;)">alert("\u21d1");</td>
        </tr>
        <tr>
          <td>&amp;rArr;</td>
          <td>⇒</td>
          <td>&amp;#8658;</td>
          <td>rightwards double arrow</td>
          <td>u+21D2 ISOtech</td>
          <td onclick="alert(&quot;\u21d2&quot;)">alert("\u21d2");</td>
        </tr>
        <tr>
          <td>&amp;dArr;</td>
          <td>⇓</td>
          <td>&amp;#8659;</td>
          <td>downwards double arrow</td>
          <td>u+21D3 ISOamsa</td>
          <td onclick="alert(&quot;\u21d3&quot;)">alert("\ud1d3");</td>
        </tr>
        <tr>
          <td>&amp;hArr;</td>
          <td>⇔</td>
          <td>&amp;#8660;</td>
          <td>left right double arrow</td>
          <td>u+21D4 ISOamsa</td>
          <td onclick="alert(&quot;\u21d4&quot;)">alert("\u21d4");</td>
        </tr>
      </tbody>
    </table>
    <h3>Mathematical Operators</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;forall;</td>
          <td>∀</td>
          <td>&amp;#8704;</td>
          <td>for all</td>
          <td>u+2200 ISOtech</td>
          <td onclick="alert(&quot;\u2200&quot;)">alert("\u2200");</td>
        </tr>
        <tr>
          <td>&amp;part;</td>
          <td>∂</td>
          <td>&amp;#8706;</td>
          <td>partial differential</td>
          <td>u+2202 ISOtech </td>
          <td onclick="alert(&quot;\u2202&quot;)">alert("\u2202");</td>
        </tr>
        <tr>
          <td>&amp;exist;</td>
          <td>∃</td>
          <td>&amp;#8707;</td>
          <td>there exists</td>
          <td>u+2203 ISOtech</td>
          <td onclick="alert(&quot;\u2203&quot;)">alert("\u2203");</td>
        </tr>
        <tr>
          <td>&amp;empty;</td>
          <td>∅</td>
          <td>&amp;#8709;</td>
          <td>empty set, a.k.a. null set, a.k.a. diameter</td>
          <td>u+2205 ISOamso</td>
          <td onclick="alert(&quot;\u2205&quot;)">alert("\u2205");</td>
        </tr>
        <tr>
          <td>&amp;nabla;</td>
          <td>∇</td>
          <td>&amp;#8711;</td>
          <td>nabla, a.k.a. backward difference</td>
          <td>u+2207 ISOtech</td>
          <td onclick="alert(&quot;\u2207&quot;)">alert("\u2207");</td>
        </tr>
        <tr>
          <td>&amp;isin;</td>
          <td>∈</td>
          <td>&amp;#8712;</td>
          <td>element of</td>
          <td>u+2208 ISOtech</td>
          <td onclick="alert(&quot;\u2208&quot;)">alert("\u2208");</td>
        </tr>
        <tr>
          <td>&amp;notin;</td>
          <td>∉</td>
          <td>&amp;#8713;</td>
          <td>not an element of</td>
          <td>u+2209 ISOtech</td>
          <td onclick="alert(&quot;\u2209&quot;)">alert("\u2209");</td>
        </tr>
        <tr>
          <td>&amp;ni  ;</td>
          <td>∋</td>
          <td>&amp;#8715;</td>
          <td>contains as member</td>
          <td>u+220B ISOtech</td>
          <td onclick="alert(&quot;\u220b&quot;)">alert("\u220b");</td>
        </tr>
        <tr>
          <td>&amp;prod;</td>
          <td>∏</td>
          <td>&amp;#8719;</td>
          <td>n-ary product, a.k.a. product sign<br>
            prod is NOT the same character as u+03A0 ‘greek capital letter pi’ though the same<br>
          glyph might be used for both</td>
          <td>u+220F ISOamsb</td>
          <td onclick="alert(&quot;\u03a0&quot;)">alert("\u03a0");</td>
        </tr>
        <tr>
          <td>&amp;sum ;</td>
          <td>∑</td>
          <td>&amp;#8721;</td>
          <td>n-ary sumation<br>
            sum is NOT the same character as u+03A3 ‘greek capital letter sigma’ though the same<br>
          glyph might be used for both</td>
          <td>u+2211 ISOamsb</td>
          <td onclick="alert(&quot;\u03a3&quot;)">alert("\u03a3");</td>
        </tr>
        <tr>
          <td>&amp;minus;</td>
          <td>−</td>
          <td>&amp;#8722;</td>
          <td>minus sign</td>
          <td>u+2212 ISOtech</td>
          <td onclick="alert(&quot;\u2212&quot;)">alert("\u2212");</td>
        </tr>
        <tr>
          <td>&amp;lowast;</td>
          <td>∗</td>
          <td>&amp;#8727;</td>
          <td>asterisk operator</td>
          <td>u+2217 ISOtech</td>
          <td onclick="alert(&quot;\u2217&quot;)">alert("\u2217");</td>
        </tr>
        <tr>
          <td>&amp;radic;</td>
          <td>√</td>
          <td>&amp;#8730;</td>
          <td>square root, a.k.a. radical sign</td>
          <td>u+221A ISOtech</td>
          <td onclick="alert(&quot;\u221a&quot;)">alert("\u221a");</td>
        </tr>
        <tr>
          <td>&amp;prop;</td>
          <td>∝</td>
          <td>&amp;#8733;</td>
          <td>proportional to</td>
          <td>u+221D ISOtech</td>
          <td onclick="alert(&quot;\u221d&quot;)">alert("\u221d");</td>
        </tr>
        <tr>
          <td>&amp;infin;</td>
          <td>∞</td>
          <td>&amp;#8734;</td>
          <td>infinity</td>
          <td>u+221E ISOtech</td>
          <td onclick="alert(&quot;\u221e&quot;)">alert("\u221e");</td>
        </tr>
        <tr>
          <td>&amp;ang ;</td>
          <td>∠</td>
          <td>&amp;#8736;</td>
          <td>angle</td>
          <td>u+2220 ISOamso</td>
          <td onclick="alert(&quot;\u2220&quot;)">alert("\u2220");</td>
        </tr>
        <tr>
          <td>&amp;and ;</td>
          <td>⊥</td>
          <td>&amp;#8869;</td>
          <td>logical and, a.k.a. wedge</td>
          <td>u+2227 ISOtech</td>
          <td onclick="alert(&quot;\u2227&quot;)">alert("\u2227");</td>
        </tr>
        <tr>
          <td>&amp;or  ;</td>
          <td>⊦</td>
          <td>&amp;#8870;</td>
          <td>logical or, a.k.a. vee</td>
          <td>u+2228 ISOtech</td>
          <td onclick="alert(&quot;\u2228&quot;)">alert("\u2228");</td>
        </tr>
        <tr>
          <td>&amp;cap ;</td>
          <td>∩</td>
          <td>&amp;#8745;</td>
          <td>intersection, a.k.a. cap</td>
          <td>u+2229 ISOtech</td>
          <td onclick="alert(&quot;\u2229&quot;)">alert("\u2229");</td>
        </tr>
        <tr>
          <td>&amp;cup ;</td>
          <td>∪</td>
          <td>&amp;#8746;</td>
          <td>union, a.k.a. cup</td>
          <td>u+222A ISOtech</td>
          <td onclick="alert(&quot;\u222a&quot;)">alert("\u222a");</td>
        </tr>
        <tr>
          <td>&amp;int ;</td>
          <td>∫</td>
          <td>&amp;#8747;</td>
          <td>integral</td>
          <td>u+222B ISOtech</td>
          <td onclick="alert(&quot;\u222b&quot;)">alert("\u222b");</td>
        </tr>
        <tr>
          <td>&amp;there4;</td>
          <td>∴</td>
          <td>&amp;#8756;</td>
          <td>therefore</td>
          <td>u+2234 ISOtech</td>
          <td onclick="alert(&quot;\u2234&quot;)">alert("\u2234");</td>
        </tr>
        <tr>
          <td>&amp;sim ;</td>
          <td>∼</td>
          <td>&amp;#8764;</td>
          <td>tilde operator, a.k.a. varies with, <br>
            similar to tilde operator, but is NOT the same character as the tilde u+007E, <br>
          although the same  glyph might be used to represent both </td>
          <td>u+223C ISOtech</td>
          <td onclick="alert(&quot;\u223c&quot;)">alert("\u223c");</td>
        </tr>
        <tr>
          <td>&amp;cong;</td>
          <td>≅</td>
          <td>&amp;#8773;</td>
          <td>approximately equal to</td>
          <td>u+2245 ISOtech</td>
          <td onclick="alert(&quot;\u2245&quot;)">alert("\u2245");</td>
        </tr>
        <tr>
          <td>&amp;asymp;</td>
          <td>≈</td>
          <td>&amp;#8776;</td>
          <td>almost equal to, a.k.a. asymptotic to</td>
          <td>u+2248 ISOamsr</td>
          <td onclick="alert(&quot;\u2248&quot;)">alert("\u2248");</td>
        </tr>
        <tr>
          <td>&amp;ne  ;</td>
          <td>≠</td>
          <td>&amp;#8800;</td>
          <td>not equal to</td>
          <td>u+2260 ISOtech</td>
          <td onclick="alert(&quot;\u2260&quot;)">alert("\u2260");</td>
        </tr>
        <tr>
          <td>&amp;equiv;</td>
          <td>≡</td>
          <td>&amp;#8801;</td>
          <td>identical to</td>
          <td>u+2261 ISOtech</td>
          <td onclick="alert(&quot;\u2261&quot;)">alert("\u2261");</td>
        </tr>
        <tr>
          <td>&amp;le  ;</td>
          <td>≤</td>
          <td>&amp;#8804;</td>
          <td>less-than or equal to</td>
          <td>u+2264 ISOtech</td>
          <td onclick="alert(&quot;\u2264&quot;)">alert("\u2264");</td>
        </tr>
        <tr>
          <td>&amp;ge  ;</td>
          <td>≥</td>
          <td>&amp;#8805;</td>
          <td>greater-than or equal to</td>
          <td>u+2265 ISOtech</td>
          <td onclick="alert(&quot;\u2265&quot;)">alert("\u2265");</td>
        </tr>
        <tr>
          <td>&amp;sub ;</td>
          <td>⊂</td>
          <td>&amp;#8834;</td>
          <td>subset of</td>
          <td>u+2282 ISOtech</td>
          <td onclick="alert(&quot;\u2282&quot;)">alert("\u2282");</td>
        </tr>
        <tr>
          <td>&amp;sup ;</td>
          <td>⊃</td>
          <td>&amp;#8835;</td>
          <td>superset of<br>
            note that nsup, ‘not a superset of u+2283′ is not covered by the Symbol font<br>
          encoding and is not included. </td>
          <td>u+2283 ISOtech</td>
          <td onclick="alert(&quot;\u2283&quot;)">alert("\u2283");</td>
        </tr>
        <tr>
          <td>&amp;nsub;</td>
          <td>⊄</td>
          <td>&amp;#8836;</td>
          <td>not a subset of</td>
          <td>u+2284 ISOamsn</td>
          <td onclick="alert(&quot;\u2284&quot;)">alert("\u2284");</td>
        </tr>
        <tr>
          <td>&amp;sube;</td>
          <td>⊆</td>
          <td>&amp;#8838;</td>
          <td>subset of or equal to</td>
          <td>u+2286 ISOtech</td>
          <td onclick="alert(&quot;\u2286&quot;)">alert("\u2286");</td>
        </tr>
        <tr>
          <td>&amp;supe;</td>
          <td>⊇</td>
          <td>&amp;#8839;</td>
          <td>superset of or equal to</td>
          <td>u+2287 ISOtech</td>
          <td onclick="alert(&quot;\u2287&quot;)">alert("\u2287");</td>
        </tr>
        <tr>
          <td>&amp;oplus;</td>
          <td>⊕</td>
          <td>&amp;#8853;</td>
          <td>circled plus, a.k.a. direct sum</td>
          <td>u+2295 ISOamsb</td>
          <td onclick="alert(&quot;\u2295&quot;)">alert("\u2295");</td>
        </tr>
        <tr>
          <td>&amp;otimes;</td>
          <td>⊗</td>
          <td>&amp;#8855;</td>
          <td>circled times, a.k.a. vector product</td>
          <td>u+2297 ISOamsb</td>
          <td onclick="alert(&quot;\u2297&quot;)">alert("\u2297");</td>
        </tr>
        <tr>
          <td>&amp;perp;</td>
          <td>⊥</td>
          <td>&amp;#8869;</td>
          <td>up tack, a.k.a. orthogonal to, a.k.a. perpendicular</td>
          <td>u+22A5 ISOtech</td>
          <td onclick="alert(&quot;\u22a5&quot;)">alert("\u22a5");</td>
        </tr>
        <tr>
          <td>&amp;sdot;</td>
          <td>⋅</td>
          <td>&amp;#8901;</td>
          <td>dot operator<br>
          dot operator is NOT the same character as u+00B7 middle dot</td>
          <td>u+22C5 ISOamsb</td>
          <td onclick="alert(&quot;\u22c5&quot;)">alert("\u22c5");</td>
        </tr>
      </tbody>
    </table>
    <h3>Miscellaneous Technical</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;lceil;</td>
          <td>⌈</td>
          <td>&amp;#8968;</td>
          <td>left ceiling, a.k.a. apl upstile</td>
          <td>u+2308, ISOamsc </td>
          <td onclick="alert(&quot;\u2308&quot;)">alert("\u2308");</td>
        </tr>
        <tr>
          <td>&amp;rceil;</td>
          <td>⌉</td>
          <td>&amp;#8969;</td>
          <td>right ceiling</td>
          <td>u+2309, ISOamsc </td>
          <td onclick="alert(&quot;\u2309&quot;)">alert("\u2309");</td>
        </tr>
        <tr>
          <td>&amp;lfloor;</td>
          <td>⌊</td>
          <td>&amp;#8970;</td>
          <td>left floor, a.k.a. apl downstile</td>
          <td>u+230A, ISOamsc </td>
          <td onclick="alert(&quot;\u230a&quot;)">alert("\u230a");</td>
        </tr>
        <tr>
          <td>&amp;rfloor;</td>
          <td>⌋</td>
          <td>&amp;#8971;</td>
          <td>right floor</td>
          <td>u+230B, ISOamsc </td>
          <td onclick="alert(&quot;\u230b&quot;)">alert("\u230b");</td>
        </tr>
        <tr>
          <td>&amp;lang;</td>
          <td>〈</td>
          <td>&amp;#9001;</td>
          <td>left-pointing angle bracket, a.k.a. bra<br>
            lang is NOT the same character as u+003C ‘less than’<br>
          or u+2039 ’single left-pointing angle quotation mark’</td>
          <td>u+2329 ISOtech</td>
          <td onclick="alert(&quot;\u2329&quot;)">alert("\u2329");</td>
        </tr>
        <tr>
          <td>&amp;rang;</td>
          <td>〉</td>
          <td>&amp;#9002;</td>
          <td>right-pointing angle bracket, a.k.a. ket<br>
            rang is NOT the same character as u+003E ‘greater than’<br>
          or u+203A ’single right-pointing angle quotation mark’</td>
          <td>u+232A ISOtech</td>
          <td onclick="alert(&quot;\u232a&quot;)">alert("\u232a");</td>
        </tr>
      </tbody>
    </table>
    <h3>Geometric Shapes</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;loz ;</td>
          <td>◊</td>
          <td>&amp;#9674;</td>
          <td>lozenge</td>
          <td>u+25CA ISOpub</td>
          <td onclick="alert(&quot;\u25ca&quot;)">alert("\u25ca");</td>
        </tr>
      </tbody>
    </table>
    <h3>Miscellaneous Symbols</h3>
    <table class="entities_num">
      <tbody>
        <tr>
          <td>&amp;spades;</td>
          <td>♠</td>
          <td>&amp;#9824;</td>
          <td>black spade suit</td>
          <td>u+2660 ISOpub</td>
          <td onclick="alert(&quot;\u2660&quot;)">alert("\u2660");</td>
        </tr>
        <tr>
          <td>&amp;clubs;</td>
          <td>♣</td>
          <td>&amp;#9827;</td>
          <td>black club suit, a.k.a. shamrock</td>
          <td>u+2663 ISOpub</td>
          <td onclick="alert(&quot;\u2663&quot;)">alert("\u2663");</td>
        </tr>
        <tr>
          <td>&amp;hearts;</td>
          <td>♥</td>
          <td>&amp;#9829;</td>
          <td>black heart suit, a.k.a. valentine</td>
          <td>u+2665 ISOpub</td>
          <td onclick="alert(&quot;\u2665&quot;)">alert("\u2665");</td>
        </tr>
        <tr>
          <td>&amp;diams;</td>
          <td>♦</td>
          <td>&amp;#9830;</td>
          <td>black diamond suit</td>
          <td>u+2666 ISOpub</td>
          <td onclick="alert(&quot;\u2666&quot;)">alert("\u2666");</td>
        </tr>
      </tbody>
    </table>
    <p><a href="http://www.evotech.net/blog/2007/04/named-html-entities-in-numeric-order/">Reference URL</a>
  </p></ph3></article>
var arrayLanguage = [ '', 'portuguese', 'english' ];

function selectLanguage(){
        var selLang = document.getElementById('selLan');
        for (var i=0; i < arrayLanguage.length; i++) {
                selLang.options[i] = new Option(arrayLanguage[i], arrayLanguage[i]);
        }
}

function languageShow(f){
        var tagShow = "" ;
        var languageType = document.selectlanguage.language.value ;
        switch(languageType){
                case 'portuguese':
			tagShow += '<table border="0" align="center"  width="50%">';
			tagShow += '<tr><td colspan=2 align="center"><strong>Endpoints</strong></td></tr>';
			tagShow += '<tr><td><strong>/</strong></td><td>exibe esta p&aacute;gina de ajuda</td></tr>';
			tagShow += '<tr><td><strong>/status</strong></td><td>exibe o status da API</td></tr>';
			tagShow += '<tr><td><strong>/dados</strong></td><td>caminho de entrada para exibi&ccedil;&atilde;o dos dados</td></tr>';
			tagShow += '<tr><td colspan=2 align="center">&nbsp;</td></tr>';
			tagShow += '<tr><td colspan=2 align="center"><strong>Par&acirc;metros de Busca</strong></td></tr>';
			tagShow += '<tr><td><strong>chave</strong></td><td>descri&ccedil;&atilde;o</td></tr>';
			tagShow += '<tr><td><strong>search</strong></td><td>Ocorr&ecirc;ncia de busca. Vazio = Registro Mais recente</td></tr>';
			tagShow += '<tr><td><strong>total</strong></td><td>Quantidade de resultados retornados. Default: 1</td></tr>';
			tagShow += '<tr><td><strong>time</strong></td><td>Intervalo de tempo. Ex.: 1d, 1h, 10m. Default: 5m</td></tr>';
			tagShow += '<tr><td colspan=2 align="center">&nbsp;</td></tr>';
			tagShow += '<tr><td colspan=2 align="center"><strong>exemplo</strong></td></tr>';
			tagShow += '<tr><td colspan=2 align="center">/dados?search=Rio2016&total=10&time=1h</td></tr>';
			tagShow += '</table>';
                break;
		case 'english':
			tagShow += '<table border="0" align="center"  width="50%">';
			tagShow += '<tr><td colspan=2 align="center"><strong>Endpoints</strong></td></tr>';
			tagShow += '<tr><td><strong>/</strong></td><td>show this help page</td></tr>';
			tagShow += '<tr><td><strong>/status</strong></td><td>show the API status</td></tr>';
			tagShow += '<tr><td><strong>/dados</strong></td><td>endpoint to start showing the data</td></tr>';
			tagShow += '<tr><td colspan=2 align="center">&nbsp;</td></tr>';
			tagShow += '<tr><td colspan=2 align="center"><strong>Search parameters</strong></td></tr>';
			tagShow += '<tr><td><strong>Key</strong></td><td>Description</td></tr>';
			tagShow += '<tr><td><strong>search</strong></td><td>Search occurrence. Empty = Most recent register</td></tr>';
			tagShow += '<tr><td><strong>total</strong></td><td>Amount of occurrence to return. Default: 1</td></tr>';
			tagShow += '<tr><td><strong>time</strong></td><td>Time Interval. Ex.: 1d, 1h, 10m. Default: 5m</td></tr>';
			tagShow += '<tr><td colspan=2 align="center">&nbsp;</td></tr>';
			tagShow += '<tr><td colspan=2 align="center"><strong>Example</strong></td></tr>';
			tagShow += '<tr><td colspan=2 align="center">/dados?search=Rio2016&total=10&time=1h</td></tr>';
			tagShow += '</table>';
		break;
	}
        return tagShow;
}

function changeContent(f){
        var showPhrase = document.getElementById("emptyTag");
        showPhrase.innerHTML = languageShow(f);
        return false;
}

function start(){
        selectLanguage();
}

window.onload = start;

/*jshint esversion: 8 */
let myEditor_1
let myEditor_2

BalloonEditor
    .create(document.querySelector('.editor_1'), {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                'alignment',
                '|',
                'indent',
                'outdent',
                '|',
                'horizontalLine',
                'imageUpload',
                'blockQuote',
                'code',
                'codeBlock',
                '|',
                'fontFamily',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                'removeFormat',
                '|',
                'insertTable',
                'highlight',
                'MathType',
                'ChemType',
                '|',
                'undo',
                'redo'
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:full',
                'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        },
        licenseKey: '',
    })
    .then(editor => {
        myEditor_1 = editor
        editor.data.set(document.getElementById('myData1').textContent)
        //editor.isReadOnly = true
    })
    .catch(error => {
        console.error('Oops, something gone wrong!')
        console.error('Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:')
        console.warn('Build id: hn4qw6vrrbar-3qtv8qgxalyr')
        console.error(error)
    })

BalloonEditor
    .create(document.querySelector('.editor_2'), {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                'alignment',
                '|',
                'indent',
                'outdent',
                '|',
                'horizontalLine',
                'imageUpload',
                'blockQuote',
                'code',
                'codeBlock',
                '|',
                'fontFamily',
                'fontSize',
                'fontColor',
                'fontBackgroundColor',
                'removeFormat',
                '|',
                'insertTable',
                'highlight',
                'MathType',
                'ChemType',
                '|',
                'undo',
                'redo'
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                'imageTextAlternative',
                'imageStyle:full',
                'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                'tableColumn',
                'tableRow',
                'mergeTableCells',
                'tableCellProperties',
                'tableProperties'
            ]
        },
        licenseKey: '',
    })
    .then(editor => {
        myEditor_2 = editor
        editor.data.set(document.getElementById('myData2').textContent)
        //editor.isReadOnly = true
    })
    .catch(error => {
        console.error('Oops, something gone wrong!')
        console.error('Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:')
        console.warn('Build id: hn4qw6vrrbar-3qtv8qgxalyr')
        console.error(error)
    })

function rerange(rawResult, type, plot) {
    let rerangedResult = [];
    let result = JSON.parse(rawResult);
    let find;
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < rerangedResult.length; j++) {
            find = false;
            if (rerangedResult[j].geo == result[i].geo) {
                rerangedResult[j].years.push(result[i].time);
                rerangedResult[j].values.push(result[i].value);
                find = true;
                break;
            }
        }
        if (!find) {
            let item = {
                geo: result[i].geo,
                years: [result[i].time],
                values: [result[i].value]
            };
            rerangedResult.push(item);
        }
    }
    generateChart(rerangedResult, type, plot);
}

let raw_data_1 = "[{\"time\":2010,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":49054.8},{\"time\":2010,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5287.3},{\"time\":2010,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14802},{\"time\":2010,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13895.9},{\"time\":2010,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44845.2},{\"time\":2010,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":26073.1},{\"time\":2010,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31449.5},{\"time\":2010,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42735},{\"time\":2011,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":50593.5},{\"time\":2011,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5645},{\"time\":2011,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15635.5},{\"time\":2011,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14157.2},{\"time\":2011,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45038},{\"time\":2011,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25091},{\"time\":2011,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31459.9},{\"time\":2011,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43727.9},{\"time\":2012,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":52178.2},{\"time\":2012,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6082.2},{\"time\":2012,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15555.4},{\"time\":2012,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14972.8},{\"time\":2012,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45496.5},{\"time\":2012,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24332.3},{\"time\":2012,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":30996.5},{\"time\":2012,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44680.8},{\"time\":2013,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":53452.5},{\"time\":2013,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6617.5},{\"time\":2013,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15018.7},{\"time\":2013,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15826.5},{\"time\":2013,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45306.2},{\"time\":2013,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":22512.8},{\"time\":2013,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31029.9},{\"time\":2013,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45486.8},{\"time\":2014,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":53965.2},{\"time\":2014,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6987.4},{\"time\":2014,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14535.7},{\"time\":2014,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16864.4},{\"time\":2014,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45491},{\"time\":2014,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":22063.2},{\"time\":2014,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31073},{\"time\":2014,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46019.7},{\"time\":2015,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":54043.8},{\"time\":2015,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7381.7},{\"time\":2015,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15109.2},{\"time\":2015,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17490.3},{\"time\":2015,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46557},{\"time\":2015,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21529.2},{\"time\":2015,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31375.4},{\"time\":2015,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46514.6},{\"time\":2016,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":54354.5},{\"time\":2016,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7809.7},{\"time\":2016,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15851.4},{\"time\":2016,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":18488.6},{\"time\":2016,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47572.2},{\"time\":2016,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21327},{\"time\":2016,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31356.7},{\"time\":2016,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47066.2},{\"time\":2017,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":55356.7},{\"time\":2017,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":8629.9},{\"time\":2017,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17322.9},{\"time\":2017,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19776.3},{\"time\":2017,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":48782},{\"time\":2017,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21443},{\"time\":2017,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31574.6},{\"time\":2017,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47945.7},{\"time\":2018,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":56392.6},{\"time\":2018,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":9464.5},{\"time\":2018,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19210},{\"time\":2018,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21795.3},{\"time\":2018,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":49809.5},{\"time\":2018,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21723},{\"time\":2018,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31985},{\"time\":2018,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":48799}]";

let raw_data_2 = "[{\"time\":2010,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5287.3},{\"time\":2010,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":49054.8},{\"time\":2010,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14802},{\"time\":2010,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35409.2},{\"time\":2010,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13895.9},{\"time\":2010,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31449.5},{\"time\":2010,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44845.2},{\"time\":2010,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":26073.1},{\"time\":2010,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16462},{\"time\":2010,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35000.6},{\"time\":2010,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42735},{\"time\":2010,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25954.5},{\"time\":2010,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":10258.1},{\"time\":2010,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11936.5},{\"time\":2010,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":58910.9},{\"time\":2010,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":10323.3},{\"time\":2010,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19843.9},{\"time\":2010,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42141},{\"time\":2010,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":39392.8},{\"time\":2010,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20863.9},{\"time\":2010,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11544},{\"time\":2010,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7767.2},{\"time\":2010,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24074.8},{\"time\":2010,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13784.3},{\"time\":2010,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":39958.6},{\"time\":2010,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":41816},{\"time\":2010,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":37600.5},{\"time\":2010,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31185.9},{\"time\":2010,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":60315.9},{\"time\":2010,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":62068.8},{\"time\":2010,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5429.4},{\"time\":2010,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2010,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2011,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5645},{\"time\":2011,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":50593.5},{\"time\":2011,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15635.5},{\"time\":2011,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":36465.5},{\"time\":2011,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14157.2},{\"time\":2011,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31459.9},{\"time\":2011,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45038},{\"time\":2011,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25091},{\"time\":2011,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16709.1},{\"time\":2011,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35342},{\"time\":2011,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43727.9},{\"time\":2011,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":26546.6},{\"time\":2011,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":10533.9},{\"time\":2011,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12261.5},{\"time\":2011,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":60031.2},{\"time\":2011,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":10962.5},{\"time\":2011,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20505.4},{\"time\":2011,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42928.1},{\"time\":2011,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":40200.5},{\"time\":2011,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20473.3},{\"time\":2011,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11785.8},{\"time\":2011,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7503.9},{\"time\":2011,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24449.4},{\"time\":2011,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14059.6},{\"time\":2011,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43513.7},{\"time\":2011,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43245.2},{\"time\":2011,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":37818.2},{\"time\":2011,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":33923.7},{\"time\":2011,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":64870.1},{\"time\":2011,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":70234.8},{\"time\":2011,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5487.3},{\"time\":2011,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2011,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2012,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6082.2},{\"time\":2012,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":52178.2},{\"time\":2012,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15555.4},{\"time\":2012,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":37430},{\"time\":2012,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14972.8},{\"time\":2012,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":30996.5},{\"time\":2012,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45496.5},{\"time\":2012,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24332.3},{\"time\":2012,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16545.9},{\"time\":2012,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":34900.9},{\"time\":2012,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44680.8},{\"time\":2012,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":27010.2},{\"time\":2012,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11473.6},{\"time\":2012,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12196.3},{\"time\":2012,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":61115.2},{\"time\":2012,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11432.7},{\"time\":2012,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21196.6},{\"time\":2012,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43765.8},{\"time\":2012,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":41282.7},{\"time\":2012,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19843.3},{\"time\":2012,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12019.4},{\"time\":2012,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7375.6},{\"time\":2012,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24211.7},{\"time\":2012,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14404.5},{\"time\":2012,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46530.4},{\"time\":2012,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44430.6},{\"time\":2012,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":40995.5},{\"time\":2012,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35623.7},{\"time\":2012,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":70711.1},{\"time\":2012,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":72215.2},{\"time\":2012,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5379},{\"time\":2012,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2012,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2013,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6617.5},{\"time\":2013,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":53452.5},{\"time\":2013,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15018.7},{\"time\":2013,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":38150.1},{\"time\":2013,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15826.5},{\"time\":2013,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31029.9},{\"time\":2013,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45306.2},{\"time\":2013,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":22512.8},{\"time\":2013,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16223.8},{\"time\":2013,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35178.7},{\"time\":2013,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45486.8},{\"time\":2013,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25579.1},{\"time\":2013,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12030},{\"time\":2013,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11925.3},{\"time\":2013,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":62535.3},{\"time\":2013,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12052.5},{\"time\":2013,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21639.4},{\"time\":2013,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44561.6},{\"time\":2013,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42192.1},{\"time\":2013,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20534.7},{\"time\":2013,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12183.8},{\"time\":2013,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7745.5},{\"time\":2013,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24329.9},{\"time\":2013,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14773.7},{\"time\":2013,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47742.8},{\"time\":2013,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45055.9},{\"time\":2013,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":40402.5},{\"time\":2013,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":37207.8},{\"time\":2013,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":70693.1},{\"time\":2013,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":71548.1},{\"time\":2013,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5150.3},{\"time\":2013,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2013,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2014,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6987.4},{\"time\":2014,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":53965.2},{\"time\":2014,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14535.7},{\"time\":2014,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":39249.6},{\"time\":2014,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16864.4},{\"time\":2014,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31073},{\"time\":2014,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45491},{\"time\":2014,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":22063.2},{\"time\":2014,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15287.5},{\"time\":2014,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35224.5},{\"time\":2014,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46019.7},{\"time\":2014,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24640.8},{\"time\":2014,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13026.4},{\"time\":2014,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11540.7},{\"time\":2014,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":64726.2},{\"time\":2014,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12613},{\"time\":2014,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21945.5},{\"time\":2014,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45295.5},{\"time\":2014,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42980},{\"time\":2014,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20161.2},{\"time\":2014,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12487.7},{\"time\":2014,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":8234.1},{\"time\":2014,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24631.7},{\"time\":2014,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15068.4},{\"time\":2014,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46441.9},{\"time\":2014,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45479.9},{\"time\":2014,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43032.5},{\"time\":2014,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":40505.1},{\"time\":2014,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":68072.7},{\"time\":2014,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":72119.7},{\"time\":2014,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5403.2},{\"time\":2014,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2014,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2015,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7381.7},{\"time\":2015,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":54043.8},{\"time\":2015,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15109.2},{\"time\":2015,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":40344.2},{\"time\":2015,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17490.3},{\"time\":2015,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31375.4},{\"time\":2015,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46557},{\"time\":2015,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21529.2},{\"time\":2015,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15435.3},{\"time\":2015,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35584.2},{\"time\":2015,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46514.6},{\"time\":2015,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24307.1},{\"time\":2015,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14032.5},{\"time\":2015,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11719.7},{\"time\":2015,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":65896.7},{\"time\":2015,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13359.9},{\"time\":2015,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":23186},{\"time\":2015,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45149.3},{\"time\":2015,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43816.9},{\"time\":2015,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20226.6},{\"time\":2015,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12699.1},{\"time\":2015,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":8391.3},{\"time\":2015,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25002.7},{\"time\":2015,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15632.8},{\"time\":2015,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46366.8},{\"time\":2015,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46131.3},{\"time\":2015,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":48126.7},{\"time\":2015,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46201.8},{\"time\":2015,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":65158.5},{\"time\":2015,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":81819.4},{\"time\":2015,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5520.4},{\"time\":2015,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2015,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2016,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":7809.7},{\"time\":2016,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":54354.5},{\"time\":2016,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15851.4},{\"time\":2016,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":41278.5},{\"time\":2016,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":18488.6},{\"time\":2016,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31356.7},{\"time\":2016,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47572.2},{\"time\":2016,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21327},{\"time\":2016,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15654.9},{\"time\":2016,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35709.9},{\"time\":2016,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47066.2},{\"time\":2016,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24081.3},{\"time\":2016,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15052.4},{\"time\":2016,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11950.2},{\"time\":2016,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":66403.3},{\"time\":2016,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14256.5},{\"time\":2016,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":23853.2},{\"time\":2016,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45870.2},{\"time\":2016,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":44861.1},{\"time\":2016,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20469.1},{\"time\":2016,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12758.9},{\"time\":2016,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":9551.4},{\"time\":2016,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":25789.4},{\"time\":2016,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15981.2},{\"time\":2016,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46993.9},{\"time\":2016,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46550.8},{\"time\":2016,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43975},{\"time\":2016,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":54004.9},{\"time\":2016,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":63602.7},{\"time\":2016,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":79845},{\"time\":2016,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":5872.8},{\"time\":2016,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2016,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2017,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":8629.9},{\"time\":2017,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":55356.7},{\"time\":2017,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17322.9},{\"time\":2017,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42351.3},{\"time\":2017,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19776.3},{\"time\":2017,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31574.6},{\"time\":2017,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":48782},{\"time\":2017,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21443},{\"time\":2017,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15828.9},{\"time\":2017,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":35850.6},{\"time\":2017,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47945.7},{\"time\":2017,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24320.1},{\"time\":2017,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16200.8},{\"time\":2017,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":12875.2},{\"time\":2017,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":68377.4},{\"time\":2017,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":15575.8},{\"time\":2017,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":23723.6},{\"time\":2017,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46325.9},{\"time\":2017,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":45591.4},{\"time\":2017,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":20938.7},{\"time\":2017,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13833.3},{\"time\":2017,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":10779.7},{\"time\":2017,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":26572.7},{\"time\":2017,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16842.9},{\"time\":2017,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47132.3},{\"time\":2017,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46040.5},{\"time\":2017,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":42405.3},{\"time\":2017,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":62932.8},{\"time\":2017,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":64542.3},{\"time\":2017,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":78566.2},{\"time\":2017,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":6074.1},{\"time\":2017,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2017,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2018,\"geo\":\"Bulgaria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":9464.5},{\"time\":2018,\"geo\":\"Belgium\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":56392.6},{\"time\":2018,\"geo\":\"Czechia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":19210},{\"time\":2018,\"geo\":\"Germany (until 1990 former territory of the FRG)\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43569.1},{\"time\":2018,\"geo\":\"Estonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21795.3},{\"time\":2018,\"geo\":\"Spain\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":31985},{\"time\":2018,\"geo\":\"Ireland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":49809.5},{\"time\":2018,\"geo\":\"Greece\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21723},{\"time\":2018,\"geo\":\"Croatia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16279.9},{\"time\":2018,\"geo\":\"Italy\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":36599.3},{\"time\":2018,\"geo\":\"France\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":48799},{\"time\":2018,\"geo\":\"Cyprus\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24447.9},{\"time\":2018,\"geo\":\"Latvia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17572},{\"time\":2018,\"geo\":\"Hungary\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":13258.8},{\"time\":2018,\"geo\":\"Luxembourg\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":70617.9},{\"time\":2018,\"geo\":\"Lithuania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":16830.5},{\"time\":2018,\"geo\":\"Malta\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":24211.7},{\"time\":2018,\"geo\":\"Netherlands\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":47188.5},{\"time\":2018,\"geo\":\"Austria\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46923.9},{\"time\":2018,\"geo\":\"Portugal\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":21460.8},{\"time\":2018,\"geo\":\"Poland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":14914.5},{\"time\":2018,\"geo\":\"Romania\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":11998},{\"time\":2018,\"geo\":\"Slovenia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":27617.1},{\"time\":2018,\"geo\":\"Slovakia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":17780.9},{\"time\":2018,\"geo\":\"Sweden\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46007.6},{\"time\":2018,\"geo\":\"Finland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":46515.2},{\"time\":2018,\"geo\":\"United Kingdom\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":43234.2},{\"time\":2018,\"geo\":\"Iceland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":62917.8},{\"time\":2018,\"geo\":\"Norway\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":64774.6},{\"time\":2018,\"geo\":\"Switzerland\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":76494.7},{\"time\":2018,\"geo\":\"North Macedonia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2018,\"geo\":\"Montenegro\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0},{\"time\":2018,\"geo\":\"Serbia\",\"unit\":\"Euro\",\"na_item\":\"Compensation per employee\",\"value\":0}]";

var myCol1 = document.getElementById('myCol1');
var myCol2 = document.getElementById('myCol2');
var myPlot1 = document.getElementById('main1');
var myPlot2 = document.getElementById('main2');
var myPlot3 = document.getElementById('main3');
var myPlot4 = document.getElementById('main4');
var myPlot5 = document.getElementById('main5');

var resizeContainer = function () {
    myPlot1.style.width = myCol1.clientWidth * 0.9 + "px";
    myPlot1.style.height = myCol1.clientWidth * 0.75 + "px";
    
    myPlot2.style.width = myCol1.clientWidth * 0.9 + "px";
    myPlot2.style.height = myCol1.clientWidth * 0.75 + "px";
    
    myPlot3.style.width = myCol1.clientWidth * 0.9 + "px";
    myPlot3.style.height = myCol1.clientWidth * 0.75 + "px";
    
    myPlot4.style.width = myCol2.clientWidth * 0.9 + "px";
    myPlot4.style.height = myCol2.clientWidth * 0.75 + "px";
    
    myPlot5.style.width = myCol2.clientWidth * 0.9 + "px";
    myPlot5.style.height = myCol2.clientWidth * 0.75 + "px";
};
resizeContainer();

function generateChart(data, type, myPlot) {
    let myChart = echarts.init(myPlot);
    let option;

    if (type == 'line') {
        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            let item = {
                name: data[i].geo,
                type: type,
                symbolSize: 10,
                data: data[i].values
            };
            seriesList.push(item);
        }

        option = {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                data: geoList,
                icon: 'pin'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                data: data[0].years
            },
            yAxis: {
                type: 'value'
            },
            dataZoom: [
                {
                    type: 'inside',
                    yAxisIndex: [0],
                    filterMode: 'none'
                },
                {
                    type: 'slider',
                    xAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    bottom: 'auto',
                    filterMode: 'none'
                },
                {
                    type: 'slider',
                    yAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    filterMode: 'none'
                }],
            series: seriesList
        };
        myChart.setOption(option);
    }

    if (type == 'bar') {
        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            if (i == 0) {
                for (let j = 0; j < data[0].years.length; j++) {
                    let item = {
                        name: data[i].years[j],
                        type: type,
                        data: [data[i].values[j]]
                    };
                    seriesList.push(item);
                }
            } else {
                for (let j = 0; j < data[0].years.length; j++) {
                    seriesList[j].data.push(data[i].values[j]);
                }
            }
        }

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: data[0].years.map(String)
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            xAxis: {
                type: 'category',
                data: geoList
            },
            dataZoom: [
                {
                    type: 'inside',
                    xAxisIndex: [0],
                },
                {
                    type: 'slider',
                    xAxisIndex: [0],
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    },
                    bottom: 'auto'
                }],
            series: seriesList
        };
        myChart.setOption(option);
    }

    if (type == 'pie') {
        let dataList = [['Geo'].concat(data[0].years.map(String))];
        let seriesList = [];
        for (let i = 0; i < data.length; i++) {
            let item = [data[i].geo].concat(data[i].values);
            dataList.push(item);

            seriesList.push({ type: 'line', seriesLayoutBy: 'row' });
        }
        seriesList.push({
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
                itemName: 'Geo',
                value: '2012',
                tooltip: '2012'
            }
        });

        setTimeout(function () {
            option = {
                legend: { icon: 'pin' },
                tooltip: {
                    trigger: 'axis',
                    showContent: false
                },
                dataset: {
                    source: dataList
                },
                xAxis: { type: 'category' },
                yAxis: { gridIndex: 0 },
                grid: { top: '55%' },
                series: seriesList
            };

            myChart.on('updateAxisPointer', function (event) {
                var xAxisInfo = event.axesInfo[0];
                if (xAxisInfo) {
                    var dimension = xAxisInfo.value + 1;
                    myChart.setOption({
                        series: {
                            id: 'pie',
                            label: {
                                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                            },
                            encode: {
                                value: dimension,
                                tooltip: dimension
                            }
                        }
                    });
                }
            });
            myChart.setOption(option);
        });
    }

    if (type == 'bar3D') {
        let geoList = [], seriesList = [], yearList = [], dataList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            if (i == 0) {
                for (let j = 0; j < data[0].years.length; j++) {
                    yearList.push(data[i].years[j]);
                }
            }
            for (let j = 0; j < data[0].years.length; j++) {
                    dataList.push([j, i, data[i].values[j]]);
            }
        }
        option = {
            tooltip: {},
            visualMap: {
                max: 40000,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'category',
                data: geoList
            },
            yAxis3D: {
                type: 'category',
                data: yearList
            },
            zAxis3D: {
                type: 'value'
            },
            grid3D: {
                boxWidth: 20,
                boxDepth: 20,
                viewControl: {
                    // projection: 'orthographic'
                },
                light: {
                    main: {
                        intensity: 1.2,
                        //shadow: true
                        shadow: false
                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                type: 'bar3D',
                data: dataList.map(function (item) {
                    return {
                        value: [item[1], item[0], item[2]],
                    }
                }),
                shading: 'lambert',

                label: {
                    textStyle: {
                        fontSize: 16,
                        borderWidth: 1
                    }
                },

                emphasis: {
                    label: {
                        textStyle: {
                            fontSize: 20,
                            color: '#900'
                        }
                    },
                    itemStyle: {
                        color: '#900'
                    }
                }
            }]
        };
        myChart.setOption(option);
    }

    if (type == 'map') {

        let geoList = [], seriesList = [];
        for (let i = 0; i < data.length; i++) {
            geoList.push(data[i].geo);
            let item = {
                name: data[i].geo,
                value: data[i].values
            };
            seriesList.push(item);
        }

        $(function () {

            myChart.showLoading();

            $.get('EU.json', function (geoJson) {

                myChart.hideLoading();

                echarts.registerMap('EU', geoJson);

                myChart.setOption(option = {
                    title: {
                        text: 'The European Union Countries',
                        subtext: 'Data from: Eurostats',
                        sublink: 'https://ec.europa.eu/eurostat/tgm/graph.do?tab=graph&plugin=1&pcode=tesem160&language=en&toolbox=sort'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (p / km2)'
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 50000,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    },
                    series: [
                        {
                            name: 'EU Countries',
                            type: 'map',
                            roam: true,
                            mapType: 'EU',
                            label: {
                                show: true
                            },
                            data: seriesList,
                            nameMap: {
                                'Germany': 'Germany (until 1990 former territory of the FRG)'
                            }
                        }
                    ]
                });
            });
        });
    }
}

rerange(raw_data_1, 'line', myPlot1);
rerange(raw_data_1, 'bar', myPlot2);
rerange(raw_data_1, 'pie', myPlot3);
rerange(raw_data_1, 'bar3D', myPlot4);
rerange(raw_data_2, 'map', myPlot5);
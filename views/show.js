/*jshint esversion: 8 */
let myEditor_1
let myEditor_2

BalloonEditor
    .create(document.querySelector('.editor_1'), {
        toolbar: {
            items: [
                // 'heading',
                // '|',
                // 'bold',
                // 'italic',
                // 'link',
                // 'bulletedList',
                // 'numberedList',
                // 'alignment',
                // '|',
                // 'indent',
                // 'outdent',
                // '|',
                // 'horizontalLine',
                // 'imageUpload',
                // 'blockQuote',
                // 'code',
                // 'codeBlock',
                // '|',
                // 'fontFamily',
                // 'fontSize',
                // 'fontColor',
                // 'fontBackgroundColor',
                // 'removeFormat',
                // '|',
                // 'insertTable',
                // 'highlight',
                // 'MathType',
                // 'ChemType',
                // '|',
                // 'undo',
                // 'redo'
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                // 'imageTextAlternative',
                // 'imageStyle:full',
                // 'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                // 'tableColumn',
                // 'tableRow',
                // 'mergeTableCells',
                // 'tableCellProperties',
                // 'tableProperties'
            ]
        },
        licenseKey: '',
    })
    .then(editor => {
        myEditor_1 = editor
        editor.data.set(document.getElementById('myData1').textContent)
        editor.isReadOnly = true
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
                // 'heading',
                // '|',
                // 'bold',
                // 'italic',
                // 'link',
                // 'bulletedList',
                // 'numberedList',
                // 'alignment',
                // '|',
                // 'indent',
                // 'outdent',
                // '|',
                // 'horizontalLine',
                // 'imageUpload',
                // 'blockQuote',
                // 'code',
                // 'codeBlock',
                // '|',
                // 'fontFamily',
                // 'fontSize',
                // 'fontColor',
                // 'fontBackgroundColor',
                // 'removeFormat',
                // '|',
                // 'insertTable',
                // 'highlight',
                // 'MathType',
                // 'ChemType',
                // '|',
                // 'undo',
                // 'redo'
            ]
        },
        language: 'en',
        image: {
            toolbar: [
                // 'imageTextAlternative',
                // 'imageStyle:full',
                // 'imageStyle:side'
            ]
        },
        table: {
            contentToolbar: [
                // 'tableColumn',
                // 'tableRow',
                // 'mergeTableCells',
                // 'tableCellProperties',
                // 'tableProperties'
            ]
        },
        licenseKey: '',
    })
    .then(editor => {
        myEditor_2 = editor
        editor.data.set(document.getElementById('myData2').textContent)
        editor.isReadOnly = true
    })
    .catch(error => {
        console.error('Oops, something gone wrong!')
        console.error('Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:')
        console.warn('Build id: hn4qw6vrrbar-3qtv8qgxalyr')
        console.error(error)
    })
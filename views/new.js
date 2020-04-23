/*jshint esversion: 8 */
let editor
let saveButton = document.getElementById('saveArticle')

ClassicEditor
    .create(document.querySelector('.editor'), {
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
    .then(newEditor => {
        editor = newEditor
    })
    .catch(error => {
        console.error('Oops, something gone wrong!')
        console.error('Please, report the following error in the https://github.com/ckeditor/ckeditor5 with the build id and the error stack trace:')
        console.warn('Build id: hn4qw6vrrbar-3qtv8qgxalyr')
        console.error(error)
    })
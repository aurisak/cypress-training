describe('upload and download file', () => {

    it('user can upload file', () => {
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html')
        cy.get('#fileinput').attachFile('testfile.pdf')
        cy.get('#itsafile').check()
        cy.get('input[name="upload"]').click()
        cy.get('#uploadedfilename').contains('testfile.pdf')
    })

    it('user can download file diresctly', () => {
        cy.visit('https://testpages.herokuapp.com/styled/download/download.html')
        cy.downloadFile('https://testpages.herokuapp.com/files/textfile.txt','cypress/downloads/direct-download', 'textfile.txt')
        cy.readFile('cypress/downloads/direct-download/textfile.txt')
    } )
})
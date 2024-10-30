
    const userInput = document.getElementById('user_input');
    const passwordInput = document.getElementById('password_input');
    const loginButton = document.getElementById('loginButton');
    const loginError = document.getElementById('loginError');
    const errorMessage = document.getElementById('errorMessage');
    const mainContent = document.querySelector('.mainContent');
    const loginBg = document.querySelector('.loginBg');
    const padButtons = document.querySelectorAll('.logInPadEl');
    const coinButtons = document.querySelectorAll('.coinButton');
    const deleteButton = document.getElementById('dos_delButt');
    const printButton = document.getElementById('dos_printAction');
    const dosButTip = document.getElementById('dos_butTip');
    const dosButRes = document.getElementById('dos_butRes');
    const dosButQuo = document.getElementById('dos_butQuo');
    const dosButTur = document.getElementById('dos_butTur');
    const tipScreen = document.querySelector('.tok_Page_Tipp');
    const resultsScreen = document.querySelector('.tok_Page_Results');
    const quotesScreen = document.querySelector('.tok_Page_Quotes');
    const turnoverScreen = document.querySelector('.tok_Page_TurnOver');

    function hideAllScreens() {
        tipScreen.style.display = 'false';
        resultsScreen.style.display = 'false';
        quotesScreen.style.display = 'false';
        turnoverScreen.style.display = 'display';
    }
    dosButTip.addEventListener('click', () => {
        hideAllScreens();
        tipScreen.style.display = 'block';
        updateSelectedButton(dosButTip);
    });

    dosButRes.addEventListener('click', () => {
        hideAllScreens();
        resultsScreen.style.display = 'block';
        updateSelectedButton(dosButRes);
    });

    dosButQuo.addEventListener('click', () => {
        hideAllScreens();
        quotesScreen.style.display = 'block';
        updateSelectedButton(dosButQuo);
    });

    dosButTur.addEventListener('click', () => {
        hideAllScreens();
        turnoverScreen.style.display = 'block';
        updateSelectedButton(dosButTur);
    });

    function updateSelectedButton(selectedButton) {
        const allButtons = [dosButTip, dosButRes, dosButQuo, dosButTur];
        allButtons.forEach((button) => button.classList.remove('selected'));
        selectedButton.classList.add('selected');
    }

    const tickClosList = document.getElementById('dos_tickClosList');

    function loadStylesheet(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    printButton.addEventListener('click', () => {
        startSpinner(printButton);
        generatePDFTicket();
        setTimeout(() => stopSpinner(printButton), 3000);
    });

    function generatePDFTicket() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            unit: 'mm',
            format: [80, 200],
        });

        try {

            doc.setFont('courier', 'bold');
            doc.setFontSize(10);

            doc.setFont('helvetica', 'normal');
            doc.text('Racing Dogs', 36, 5, { align: 'center' });
            doc.text('*** Ticket ***', 36, 50, { align: 'center' });
            doc.text(`Fecha: ${new Date().toLocaleString()}`, 2, 75);

            doc.text('Nu.', 2, 100);
            doc.text('Jugada', 17, 100);
            doc.text('Monto', 58, 100);

            const rows = generateGameRowsFromTickClosList();
            let y = 120;
            rows.forEach((row, index) => {
                const combinationText = getCombinationText();

                doc.text(`${index + 1}`, 4, y);
                doc.text(combinationText, 17, y);
                doc.text(row[3], 58, y);
                y += 10;
            });

            doc.autoPrint();
            const pdfData = doc.output('blob');
            const url = URL.createObjectURL(pdfData);
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);

            iframe.onload = () => iframe.contentWindow.print();
        } catch (error) {
            console.error('Error al generar el PDF:', error);
        }
    }

    function generatePDFTicket() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            unit: 'mm',
            format: [80, 200], 
        });

        try {
            doc.setFont('courier', 'bold');
            doc.setFontSize(10);

            doc.setFont('helvetica', 'normal');
            doc.text('Racing Dogs', 36, 5, { align: 'center' });
            doc.text('*** Ticket ***', 36, 50, { align: 'center' });
            doc.text('Sitio: Piki05', 2, 55);
            doc.text('Terminal ID:                      66954312dcafc', 2, 60);
            doc.text('Operador ID:                  111-111-111-111', 2, 65);
            doc.text('Ticket:                           8d6cec5ffc88ea5f', 2, 70);
            doc.text(`Fecha:                     ${new Date().toLocaleString()}`, 2, 75); 

            doc.setFont('helvetica', 'normal');
            doc.text('Juego:                                          6 Galgos', 2, 85);
            const idJuego = `541_${new Date().toLocaleString().replace(/[\/:]/g, '').replace(',', '').replace(' ', '_')}`;
            doc.text(`ID de juego:          ${idJuego}`, 2, 90);

            drawSeparator(doc, { length: 6, x: 30, y: 80, char: '*' });
            drawSeparator(doc, { length: 1, x: 2, y: 40, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 1, x: 2, y: 95, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 1, x: 2, y: 104, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 1, x: 2, y: 113, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 1, x: 2, y: 123, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 1, x: 2, y: 130, z: 10, char: '=', width: 10 });

            doc.setFont('helvetica', 'normal');
            doc.text('Nu.', 2, 100);
            doc.text('Jugada', 17, 100);
            doc.text('Cuotas', 39, 100);
            doc.text('Monto', 58, 100);

            const rows = generateGameRowsFromTickClosList();
            let y = 120;
            rows.forEach(row => {
                doc.text(row[0], 4, y + -10); 
                doc.text(row[3], 58, y - 10); 
                doc.text(row[2], 40, y + -10);
                doc.text(row[2], 30, y - 10);
                y += 10;
            });
            doc.setFont('helvetica', 'bold');
            doc.text('Depositar:                                      100,00', 3, y + -13);
            doc.setFont('helvetica', 'normal');
            doc.text('Máximo beneficio:                        5975,00', 3, y + 2);
            doc.text(
                'Con su apuesta de entrada tiene la oportunidad de ganancia: 7740,36', 
                10, 
                y + 30, 
                { maxWidth: 60 }
            );

            doc.autoPrint();
            const pdfData = doc.output('blob');
            const url = URL.createObjectURL(pdfData);
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);

            iframe.onload = () => iframe.contentWindow.print();
        } catch (error) {
            console.error('Error al generar el PDF:', error);
        }
    }

    function generateGameRowsFromTickClosList() {
        const rows = [];
        const tickItems = document.querySelectorAll('#dos_tickClosList div.selected');

        tickItems.forEach((item, index) => {
            const numero = item.getAttribute('data-numb') || '';
            rows.push([`${index + 1}`, numero, '41,3', '25,00']);
        });

        return rows;
    }

    function drawSeparator(doc, { length = 40, x = 10, y = 80, char = '-' }) {
        const line = char.repeat(length);
        doc.setFont('courier', 'bold');
        doc.text(line, x, y);
    }

    function generateGameRowsFromSelected() {
        const rows = [];
        const selectedItems = document.querySelectorAll('#dos_tickClosList .selected');

        selectedItems.forEach((item, index) => {
            const jugada = item.textContent.trim();
            const id = `ID_${index + 1}`;
            rows.push([`${index + 1}`, id, jugada, '41,3', '25,00']);
        });

        return rows;
    }

    function generateGameRowsFromTickClosList() {
        const rows = [];
        const tickItems = document.querySelectorAll('#dos_tickClosList div.selected');

        tickItems.forEach((item, index) => {
            const numero = item.getAttribute('data-numb') || '';
            rows.push([`${index + 1}`, numero, '41,3', '25,00']);
        });

        return rows;
    }

    function generateGameRows() {
        const rows = [];

        selectedFirst.forEach((item, index) => {
            const jugada = item.textContent.trim();
            rows.push([`${index + 1}`, jugada, '41,3', '25,00']);
        });

        selectedSecond.forEach((item, index) => {
            const jugada = item.textContent.trim();
            rows.push([`${selectedFirst.length + index + 1}`, jugada, '31,7', '25,00']);
        });

        return rows;
    }

    function generateItemsList() {
        let items = '';
        selectedFirst.forEach((item, index) => {
            items += `<p>Artículo ${index + 1}: ${item.textContent.trim()}</p>`;
        });
        selectedSecond.forEach((item, index) => {
            items += `<p>Artículo ${selectedFirst.length + index + 1}: ${item.textContent.trim()}</p>`;
        });
        return items;
    }

    loadStylesheet('posgame.03109b9841f40f810c79.css');

    const selectedNumbersFirst = Array.from({ length: 6 }, (_, i) =>
        document.getElementById(`dos_selNumbFirst${i + 1}`)
    );
    const selectedNumbersSecond = Array.from({ length: 6 }, (_, i) =>
        document.getElementById(`dos_selNumbSecond${i + 1}`)
    );

    let selectedFirst = [];
    let selectedSecond = [];
    let selectedPrice = null;
    let activeInput = userInput;
    let isMouseDown = false;

    function setActiveInput(input) {
        activeInput = input;
        input.removeAttribute('readonly');
        input.focus();
    }


    dosButRes.addEventListener('click', () => {
        showResultsScreen();
        changeResultsClass();
    });

    const resultImage = document.createElement('img');
    resultImage.className = 'resultBig';
    resultImage.src =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIxNjI0cHgiIGhlaWdodD0iODE5cHgiIHZpZXdCb3g9IjAgMCAxNjI0IDgxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTYyNCA4MTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtvcGFjaXR5OjAuMztmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0MXtkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjY7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDMxNjNEO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDJ7b3BhY2l0eTowLjE1O2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6dXJsKCNTVkdJRF8xXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2MjQsMEgwdjgwNGgxNDU0LjMxYzE0LjgsMCwyNy40LTEwLjYsMzAuMS0yNS4yTDE2MjQsMHoiLz4NCjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNDg1LjMxLDc1NS44TDE2MjAuOSwwSDc3OXY3ODFoNjc2LjMxQzE0NzAuMDEsNzgxLDE0ODIuNzEsNzcwLjQsMTQ4NS4zMSw3NTUuOHoiLz4NCjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iODEwLjQ1IiB5MT0iNTgxIiB4Mj0iODEwLjQ1IiB5Mj0iMTM2MiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgLTU4MSkiPg0KCTxzdG9wICBvZmZzZXQ9IjAuODc2IiBzdHlsZT0ic3RvcC1jb2xvcjojMDAwMDAwIi8+DQoJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMDAwMCIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNDg1LjMxLDc1NS44TDE2MjAuOSwwSDB2NzgxaDE0NTUuMzFDMTQ3MC4wMSw3ODEsMTQ4Mi43MSw3NzAuNCwxNDg1LjMxLDc1NS44eiIvPg0KPC9zdmc+DQo=';

    resultImage.style.position = 'absolute';
    resultImage.style.bottom = '-450%';
    resultImage.style.left = '0';
    resultImage.style.width = '100%';
    resultImage.style.height = '80%';
    resultImage.style.scale = "800%"
    resultImage.style.paddingRight = "50%"

    function showResultsScreen() {
        mainContent.style.display = 'none';
        loginBg.style.display = 'none';
        resultsScreen.style.display = 'block';


        if (!resultsScreen.contains(resultImage)) {
            resultsScreen.appendChild(resultImage);
        }
    }

    function changeResultsClass() {
        dosButRes.className = 'menu_item dos_colorHiTxt tok_Page_Results selected';
    }

    userInput.addEventListener('click', () => setActiveInput(userInput));
    passwordInput.addEventListener('click', () => setActiveInput(passwordInput));

    document.getElementById('userInputClear').addEventListener('click', () => {
        userInput.value = '';
    });
    document.getElementById('passwordInputClear').addEventListener('click', () => {
        passwordInput.value = '';
    });

    padButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.id.replace('logInPadNu', '').replace('logInPadDel', '');

            if (button.id.includes('Del')) {
                activeInput.value = activeInput.value.slice(0, -1);
                formatUserInput();
            } else if (activeInput === userInput) {
                if (!isNaN(value) && activeInput.value.replace(/\D/g, '').length < 12) {
                    activeInput.value = activeInput.value.replace(/\D/g, '') + value;
                    formatUserInput();
                }
            } else {
                if (!isNaN(value)) {
                    activeInput.value += value;
                }
            }

            checkAndSwitchInput();
        });
    });

    userInput.addEventListener('input', () => {
        formatUserInput();
    });

    function formatUserInput() {
        const cleanedValue = userInput.value.replace(/\D/g, '');
        let formattedValue = '';

        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formattedValue += '-';
            }
            formattedValue += cleanedValue[i];
        }

        userInput.value = formattedValue;
    }

    function checkAndSwitchInput() {
        const inputValueLength = activeInput.value.replace(/\D/g, '').length;

        if (inputValueLength >= 12) {
            if (activeInput === userInput) {
                setActiveInput(passwordInput);
            } else {
                activeInput.blur();
            }
        }
    }

    function setActiveInput(input) {
        activeInput = input;
        input.removeAttribute('readonly');
        input.focus();
    }

    userInput.addEventListener('click', () => setActiveInput(userInput));
    passwordInput.addEventListener('click', () => setActiveInput(passwordInput));

    function formatUserInput() {
        const cleanedValue = activeInput.value.replace(/\D/g, '');
        let formattedValue = '';

        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 3 === 0) {
                formattedValue += '-';
            }
            formattedValue += cleanedValue[i];
        }

        activeInput.value = formattedValue;
    }

    function checkAndSwitchInput() {
        const inputValueLength = activeInput.value.replace(/\D/g, '').length;

        if (inputValueLength >= 12) {
            if (activeInput === userInput) {
                setActiveInput(passwordInput);
            } else {
                activeInput.blur();
            }
        }
    }

    function setActiveInput(input) {
        activeInput = input;
        input.removeAttribute('readonly');
        input.focus();
    }

    userInput.addEventListener('click', () => setActiveInput(userInput));
    passwordInput.addEventListener('click', () => setActiveInput(passwordInput));

    document.getElementById('userInputClear').addEventListener('click', () => {
        userInput.value = '';
    });

    document.getElementById('passwordInputClear').addEventListener('click', () => {
        passwordInput.value = '';
    });

    document.getElementById('userInputClear').addEventListener('click', () => {
        userInput.value = '';
    });

    document.getElementById('passwordInputClear').addEventListener('click', () => {
        passwordInput.value = '';
    });

    document.addEventListener('mousedown', () => (isMouseDown = true));
    document.addEventListener('mouseup', () => (isMouseDown = false));

    function toggleSelection(element, group) {
        if (element.classList.contains('selected')) {
            element.classList.remove('selected');
            removeSelectionStyle(element);
            if (group === 'first') selectedFirst = selectedFirst.filter(el => el !== element);
            if (group === 'second') selectedSecond = selectedSecond.filter(el => el !== element);
        } else {
            element.classList.add('selected');
            applySelectionStyle(element);
            if (group === 'first') selectedFirst.push(element);
            if (group === 'second') selectedSecond.push(element);
        }
    }

    function handleSelectionEvents(element, group) {
        element.addEventListener('click', () => toggleSelection(element, group));
        element.addEventListener('mouseover', () => {
            if (isMouseDown) toggleSelection(element, group);
        });
    }

    selectedNumbersFirst.forEach((element) => handleSelectionEvents(element, 'first'));
    selectedNumbersSecond.forEach((element) => handleSelectionEvents(element, 'second'));

    function applySelectionStyle(element) {
        element.style.position = 'relative';
        element.style.overflow = 'hidden';

        const background = document.createElement('div');
        background.classList.add('selection-background');
        background.style.position = 'absolute';
        background.style.top = '0';
        background.style.left = '0';
        background.style.width = '100%';
        background.style.height = '100%';
        background.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        background.style.borderRadius = '15px';
        background.style.transition = 'background-color 0.3s ease';
        background.style.zIndex = '-1';
        background.style.transform = 'rotate(deg)';
        element.appendChild(background);
    }

    function removeSelectionStyle(element) {
        const background = element.querySelector('.selection-background');
        if (background) background.remove();
    }

    let totalSum = 0;


    const sumDisplay = document.getElementById('dos_tickCloSum');

    function updateTotalSum() {
        sumDisplay.textContent = `${totalSum.toFixed(2)}`;
    }

    coinButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (selectedFirst.length || selectedSecond.length) {
                const price = parseFloat(button.previousElementSibling.textContent.trim());

                totalSum += price;

                sendToTickClosList();

                updateTotalSum();

                clearSelections();
            } else {

            }
        });
    });

    deleteButton.addEventListener('click', () => {
        clearSelections();
        tickClosList.innerHTML = '';
        totalSum = 0;
        updateTotalSum();
    });


    coinButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (selectedFirst.length || selectedSecond.length) {
                selectedPrice = button.previousElementSibling.textContent.trim();
                sendToTickClosList();
                clearSelections();
            }
        });
    });

    function sendToTickClosList() {
        const combinationText = getCombinationText();
        const combinationDiv = createCombinationMiniature(combinationText, selectedPrice);
        if (combinationDiv) tickClosList.appendChild(combinationDiv);
    }

    function getCombinationText() {
        const firstNumber = selectedFirst[0]?.textContent.trim() || "";
        const secondNumber = selectedSecond[0]?.textContent.trim() || "";

        if (firstNumber && secondNumber) {
            return `${firstNumber}-${secondNumber}`;
        } 
        return firstNumber || secondNumber;
    }

    function sendToTickClosList() {
        selectedFirst.forEach((first, index) => {
            if (selectedSecond[index]) {
                const firstNumber = first.textContent.trim();
                const secondNumber = selectedSecond[index].textContent.trim();
                const combinationText = `${firstNumber}-${secondNumber}`;

                const combinationDiv = createCombinationMiniature(combinationText, selectedPrice);
                if (combinationDiv) tickClosList.appendChild(combinationDiv);
            }
        });
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'inline-flex';
        combinationDiv.style.alignItems = 'center';
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';
        combinationDiv.style.gap = '10px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(document.createTextNode(" - "));
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'inline-block';
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;
        combinationSpan.style.display = 'inline';

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;
        priceSpan.style.display = 'inline';

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(document.createTextNode(" - "));
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'flex';
        combinationDiv.style.justifyContent = 'space-between';
        combinationDiv.style.alignItems = 'center';
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.position = 'relative';
        combinationDiv.style.margin = '5px';
        combinationDiv.textContent = `${combinationText} - ${price}`;

        return combinationDiv;
    }

    function sendToTickClosList() {
        selectedFirst.forEach((first) => {
            const combination = createCombinationMiniature(first, null, selectedPrice);
            if (combination) tickClosList.appendChild(combination);
        });

        selectedSecond.forEach((second) => {
            const combination = createCombinationMiniature(null, second, selectedPrice);
            if (combination) tickClosList.appendChild(combination);
        });
    }

    function clearSelections() {
        [...selectedNumbersFirst, ...selectedNumbersSecond].forEach((element) => {
            if (element.classList.contains('selected')) {
                element.classList.remove('selected');
                removeSelectionStyle(element);
            }
        });
        selectedFirst = [];
        selectedSecond = [];
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'inline-flex'; 
        combinationDiv.style.alignItems = 'center'; 
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';
        combinationDiv.style.gap = '10px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(document.createTextNode(" - "));
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'inline-block';
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;
        combinationSpan.style.display = 'inline';

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;
        priceSpan.style.display = 'inline';

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(document.createTextNode(" - "));
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(combinationText, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.display = 'flex';
        combinationDiv.style.justifyContent = 'space-between';
        combinationDiv.style.alignItems = 'center';
        combinationDiv.style.margin = '5px';
        combinationDiv.style.padding = '5px';
        combinationDiv.style.border = '1px solid black';
        combinationDiv.style.borderRadius = '5px';

        const combinationSpan = document.createElement('span');
        combinationSpan.textContent = combinationText;

        const priceSpan = document.createElement('span');
        priceSpan.textContent = price;

        combinationDiv.appendChild(combinationSpan);
        combinationDiv.appendChild(priceSpan);

        return combinationDiv;
    }

    function createCombinationMiniature(first, second, price) {
        const combinationDiv = document.createElement('div');
        combinationDiv.style.position = 'absolute';
        combinationDiv.style.width = '100%';
        combinationDiv.style.height = '100%';
        combinationDiv.style.margin = '2px';
        combinationDiv.style.transform = 'scale(0.2)';
        combinationDiv.style.zIndex = "5%";
        combinationDiv.style.left = '-35%';
        combinationDiv.style.top = '-40%';

        if (first) {
            const firstClone = first.cloneNode(true);
            removeSelectionStyle(firstClone);
            combinationDiv.appendChild(firstClone);
        }
        if (second) {
            const secondClone = second.cloneNode(true);
            removeSelectionStyle(secondClone);
            combinationDiv.appendChild(secondClone);
            combinationDiv.style.top = '1%';
            combinationDiv.style.left = '-38%';
        }

        const priceDiv = document.createElement('div');
        priceDiv.textContent = `${price}`;
        priceDiv.style.fontSize = '5px';
        combinationDiv.appendChild(priceDiv);

        return combinationDiv;
    }

    deleteButton.addEventListener('click', () => {
        clearSelections();
        tickClosList.innerHTML = '';
    });

    printButton.addEventListener('click', () => {
        startSpinner(printButton);
        setTimeout(() => stopSpinner(printButton), 3000);
    });

    function startSpinner(button) {
        button.querySelector('.spinner').style.display = 'block';
    }
    function stopSpinner(button) {
        button.querySelector('.spinner').style.display = 'none';
    }

    function applyNewStyles() {
        const style1 = document.createElement('link');
        style1.rel = 'stylesheet';
        style1.href = '/dist/posgame.03109b9841f40f810c79.css';

        const style2 = document.createElement('link');
        style2.rel = 'stylesheet';
        style2.href = '/dist/possixgame.4a49cddd5365f581e777.css';

        document.head.appendChild(style1);
        document.head.appendChild(style2);
    }

    function showMainContent() {
        loginBg.style.display = 'none';
        mainContent.style.display = 'block';
    }

    loginButton.addEventListener('click', () => {
        const userId = userInput.value.replace(/\D/g, '');
        const password = passwordInput.value.replace(/\D/g, '');
        if (userId.length < 12 || password.length < 12) {
            showError('ID de Operador o Contraseña inválidos');
        } else {
            hideError();
            applyNewStyles();
            showMainContent();
        }
    });

    function showError(message) {
        errorMessage.textContent = message;
        loginError.style.display = 'block';
    }
    function hideError() {
        loginError.style.display = 'none';
    }


    window.onload = () => setActiveInput(userInput);




    function generatePDFTicket() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            unit: 'mm',
            format: [80, 200], 
        });

        try {
    
            doc.setFont('courier', 'bold');
            doc.setFontSize(10);


            doc.setFont('helvetica', 'normal');
            doc.text('Racing Dogs', 36, 5, { align: 'center' });
            doc.text('*** Ticket ***', 36, 50, { align: 'center' });
            doc.text('Sitio: Piki05', 2, 55);
            doc.text('Terminal ID:                      66954312dcafc', 2, 60);
            doc.text('Operador ID:                  111-111-111-111', 2, 65);
            doc.text('Ticket:                           8d6cec5ffc88ea5f', 2, 70);
            doc.text(`Fecha:                     ${new Date().toLocaleString()}`, 2, 75);


            doc.text('Juego:                                          6 Galgos', 2, 85);
            const idJuego = `541_${new Date().toLocaleString().replace(/[\/:]/g, '').replace(',', '').replace(' ', '_')}`;
            doc.text(`ID de juego:          ${idJuego}`, 2, 90);

            doc.text('Nu.', 2, 100);
            doc.text('Jugada', 17, 100);
            doc.text('Cuotas', 39, 100);
            doc.text('Monto', 58, 100);

        
            const rows = generateGameRowsFromTickClosList();
            let y = 120;
            rows.forEach(row => {
                doc.text(row[0], 4, y - 10);
                doc.text(row[3], 60, y - 10);
                doc.text(row[2], 40, y - 10);
                doc.text(row[1], 30, y - 10);
                y += 10;
            });

    
            doc.setFont('helvetica', 'bold');
            doc.text(`Depositar:                                      ${totalSum.toFixed(2)}`, 3, y - 13);

            doc.setFont('helvetica', 'normal');
            doc.text('Máximo beneficio:                        5975,00', 3, y + 2);
            doc.text('Con su apuesta de entrada tiene la oportunidad de ganancia: 7740,36', 10, y + 30, { maxWidth: 60 });

    
            doc.autoPrint();
            const pdfData = doc.output('blob');


            const url = URL.createObjectURL(pdfData);
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);

            iframe.onload = () => iframe.contentWindow.print();
        } catch (error) {
            console.error('Error al generar el PDF:', error);
        }
    }

    function generatePDFTicket() {
        const { jsPDF } = window.jspdf; 
        const doc = new jsPDF({
            unit: 'mm',
            format: [80, 200], 
        });

        try {
    
            doc.setFont('courier', 'bold');
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text('Racing Dogs', 36, 5, { align: 'center' });
            doc.text('*** Ticket ***', 36, 50, { align: 'center' });
            doc.text('Sitio: Piki05', 2, 55);
            doc.text('Terminal ID:                      66954312dcafc', 2, 60);
            doc.text('Operador ID:                  111-111-111-111', 2, 65);
            doc.text('Ticket:                           8d6cec5ffc88ea5f', 2, 70);
            doc.text(`Fecha:                     ${new Date().toLocaleString()}`, 2, 75);
            doc.text('Juego:                                          6 Galgos', 2, 85);
            const idJuego = `541_${new Date().toLocaleString().replace(/[\/:]/g, '').replace(',', '').replace(' ', '_')}`;
            doc.text(`ID de juego:          ${idJuego}`, 2, 90);
            drawSeparator(doc, { length: 5, x: 29, y: 80, char: '*' });
            drawSeparator(doc, { length: 32, x: 2, y: 44, z: 10, char: '-', width: 10 });
            drawSeparator(doc, { length: 32, x: 2, y: 137, z: 10, char: '=', width: 10 });
            doc.text('Nu.', 2, 100);
            doc.text('Jugada', 17, 100);
            doc.text('Cuotas', 39, 100);
            doc.text('Monto', 58, 100);
            const rows = generateGameRowsFromTickClosList();
            let y = 120;
            rows.forEach((row, index) => {
                const price = parseFloat(row[3]);

                doc.text(row[0], 4, y - 10);
                doc.text(row[1], 30, y - 10);
                doc.text(row[2], 40, y - 10);
                doc.text(`${price.toFixed(3)}`, 60, y - 10);


            y += 10;
            drawSeparator(doc, { length: 32, x: 2, y:105, char: '-', width: 10 });
            drawSeparator(doc, { length: 32, x: 2, y:115, char: '-', width: 10 });
                y += 5; 
            });


            doc.setFont('helvetica', 'bold');
            doc.text(`Depositar:                                      ${totalSum.toFixed(2)}`, 3, y - 13);

            doc.setFont('helvetica', 'normal');
            doc.text('Máximo beneficio:                        5975,00', 3, y + 2);
            doc.text('Con su apuesta de entrada tiene la oportunidad de ganancia: 7740,36', 10, y + 30, { maxWidth: 60 });

            doc.autoPrint();
            const pdfData = doc.output('blob');

            const url = URL.createObjectURL(pdfData);
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = url;
            document.body.appendChild(iframe);

            iframe.onload = () => iframe.contentWindow.print();
        } catch (error) {
            console.error('Error al generar el PDF:', error);
        }
    }

    window.onload = () => setActiveInput(userInput);
import * as Constants from '../Constants';

export const getSpecifiedCurrencies = (array) => {

    const specifiedCurrencies = [];

    for(let arrayIdx = 0; arrayIdx < array.length; arrayIdx++)
    {
        const currenctElement = array[arrayIdx];

        for(let currencyListIdx = 0; currencyListIdx < Constants.currencyList.length; currencyListIdx++)
        {
            const currentCurrency = Constants.currencyList[currencyListIdx].toLowerCase();

            if(currenctElement[0] === currentCurrency)
            {
                specifiedCurrencies.push(currenctElement);
            }
        }

    }

    return (
        specifiedCurrencies
    );
}

export const sortCurrencyArray = (currencyArray) => { 

    return (
        currencyArray.sort((a, b) => a[1] - b[1])
    )
} 

export const sortIntoColumns = (currencies) => {

    const tableColumns = {
        firstColumnArray: [],
        secondColumnArray: [],
        thirdColumnArray: []
    }

    for(let currencyIdx = 0; currencyIdx < currencies.length; currencyIdx++)
    {
        const currentItem = currencies[currencyIdx];

        const result = determineColumn(currentItem);

        if(result === 'First Column')
        {
            tableColumns.firstColumnArray.push(currentItem);
        }
        else if(result === 'Second Column')
        {
            tableColumns.secondColumnArray.push(currentItem);
        }
        else if(result === 'Third Column')
        {
            tableColumns.thirdColumnArray.push(currentItem);
        }
    }

    return (
        tableColumns
    );
}

const determineColumn = (keyValueItem) => {

    const value = keyValueItem[1];
    
    let result;

    if(Number(value) < Number(1))
    {
        result = Constants.firstColumn;
    }

    else if(Number(value) > Number(1) && Number(value) < Number(1.5))
    {
        result = Constants.secondColumn;
    }

    else if(Number(value) >  Number(1.5))
    {
        result =  Constants.thirdColumn;
    }

    return (
        result
    );
}

export const findColumnsLengths = (tableColumnsArray) => {

    const lengths = tableColumnsArray
    .map((column, columnIndex) => column.length);

    return (
        lengths    
    );
}

export const converColumnsToRows = (columnsArray) => {

    const result = [];
    const rowsSize = Math.max(...findColumnsLengths(columnsArray));
    const colsSize = Constants.columnCount;

    for(let row = 0; row < rowsSize; row++)
    {
        const rowArray = Array.apply(null, Array(colsSize));

        for(let col = 0; col < colsSize; col++)
        {
            const currentItem = columnsArray[col][row];

            if(currentItem !== undefined)
            {
                const determinePosition = determineColumn(currentItem);

                if(determinePosition === Constants.firstColumn)
                {
                    rowArray[0] = currentItem;
                }

                else if(determinePosition === Constants.secondColumn)
                {
                    rowArray[1] = currentItem;
                }

                else if(determinePosition === Constants.thirdColumn)
                {
                    rowArray[2] = currentItem;
                }
            }          
        }

        result.push(rowArray);
    }

    return result;
}

export const sortKeyValues = (response, currency) => {

    const dataCurrency = Object.entries(response[currency]);
    const currenctyList = getSpecifiedCurrencies(dataCurrency);
    const sortedList = sortCurrencyArray(currenctyList);

    return sortedList;
}

export const applyFilters = (response, currency) => {

    const sortedList = sortKeyValues(response, currency);
    const sortIntoArrays = sortIntoColumns(sortedList); 
    const convertToArray = Object.values(sortIntoArrays);  
    
    return convertToArray;
}

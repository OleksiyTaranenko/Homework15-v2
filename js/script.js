class Calculator {
    
    putItems(items) {
        let fieldValue = document.getElementById('formInput').entryField.value;
        document.getElementById('formInput').entryField.value = document.getElementById('formInput').entryField.value + items;
        
        return fieldValue;
    }

    validation() {
        try {
            let valid = document.getElementById('input');
        valid.addEventListener('keyup', () => {
            let p = valid.value;
            if(!/^[\0-9\*\-\+\/\=\(\)\.]+$/.test(p)){
                alert("Please enter only NUMBERS!");        
                calculator.cleanField('');                               
            };
        });      

        return valid;
        } catch(error) {
            alert("This is fatal ERROR!");
            alert("BYE BYE!");           
        };        
    }

    cleanField() {
        let clean = document.getElementById('clean');        
        document.form.entryField.value = '';
        clean.addEventListener('click', function() {
            calculator.cleanField('');
        });
        
        return clean;
    }

    deleteSymbols() {
        let field = document.form.entryField.value;
        document.form.entryField.value = field.substring(0, field.length-1);

        return field;
    }

    deleteS() {
        let deleteS = document.getElementById('deleteSymbol');
        deleteS.addEventListener('click', function() {
            calculator.deleteSymbols('');
        });
        
        return deleteS;
    }    

    putPlus() {
        let plus = document.getElementById('plus');
        plus.addEventListener('click', function() {
            calculator.putItems('+');
        });
        
        return plus;
    }

    putMinus() {
        let minus = document.getElementById('minus');
        minus.addEventListener('click', function() {
            calculator.putItems('-');
        });
        
        return minus;
    }

    putMultiply() {
        let multiply = document.getElementById('multiply');
        multiply.addEventListener('click', function() {
            calculator.putItems('*');
        });
        
        return multiply;
    }

    putDivide() {
        let divide = document.getElementById('divide');
        divide.addEventListener('click', function() {
            calculator.putItems('/');
        });
        
        return divide;
    }

    putSeven() {
        let seven = document.getElementById('seven');
        seven.addEventListener('click', function() {
            calculator.putItems('7');
        });
        
        return seven;
    }

    putEight() {
        let eight = document.getElementById('eight');
        eight.addEventListener('click', function() {
            calculator.putItems('8');
        });
        
        return eight;
    }

    putNine() {
        let nine = document.getElementById('nine');
        nine.addEventListener('click', function() {
            calculator.putItems('9');
        });
        
        return nine;
    }

    putOpenParenthesis() {
        let openParenthesis = document.getElementById('openParenthesis');
        openParenthesis.addEventListener('click', function() {
            calculator.putItems('(');
        });
        
        return openParenthesis;
    }

    putFour() {
        let four = document.getElementById('four');
        four.addEventListener('click', function() {
            calculator.putItems('4');
        });
        
        return four;
    }

    putFive() {
        let five = document.getElementById('five');
        five.addEventListener('click', function() {
            calculator.putItems('5');
        });
        
        return five;
    }

    putSix() {
        let six = document.getElementById('six');
        six.addEventListener('click', function() {
            calculator.putItems('6');
        });
        
        return six;
    }

    putCloseParenthesis() {
        let closeParenthesis = document.getElementById('closeParenthesis');
        closeParenthesis.addEventListener('click', function() {
            calculator.putItems(')');
        });
        
        return closeParenthesis;
    }

    putOne() {
        let one = document.getElementById('one');
        one.addEventListener('click', function() {
            calculator.putItems('1');
        });
        
        return one;
    }

    putTwo() {
        let two = document.getElementById('two');
        two.addEventListener('click', function() {
            calculator.putItems('2');
        });
        
        return two;
    }

    putThree() {
        let three = document.getElementById('three');
        three.addEventListener('click', function() {
            calculator.putItems('3');
        });
        
        return three;
    }

    equate() {
        let field = document.form.entryField.value;

        let field2 = (new Function('return ' + field)());        
    
        if(field) {
            document.form.entryField.value = field2;
        };

        if (field2 === Infinity) {
            alert("Impossible divide by ZERO!");
            calculator.cleanField('');  
            throw new Error("Impossible divide by ZERO!");
        }

        return field;
    }    

    equally() {
        let equally = document.getElementById('equally');
        equally.addEventListener('click', function() {
            calculator.equate('');
        });
        
        return equally;
    }

    putZero() {
        let zero = document.getElementById('zero');
        zero.addEventListener('click', function() {
            calculator.putItems('0');
        });
        
        return zero;
    }

    putPoint() {
        let point = document.getElementById('point');
        point.addEventListener('click', function() {
            calculator.putItems('.');
        });
        
        return point;
    }    
}

let calculator = new Calculator();

calculator.putItems();
calculator.validation();
calculator.cleanField();
calculator.deleteSymbols();
calculator.deleteS();
calculator.putPlus();
calculator.putMinus();
calculator.putMultiply();
calculator.putDivide();
calculator.putSeven();
calculator.putEight();
calculator.putNine();
calculator.putOpenParenthesis();
calculator.putFour();
calculator.putFive();
calculator.putSix();
calculator.putCloseParenthesis();
calculator.putOne();
calculator.putTwo();
calculator.putThree();
calculator.equate();
calculator.equally();
calculator.putZero();
calculator.putPoint();
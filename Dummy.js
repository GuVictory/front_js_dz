// Заставьте это работать
function Dummy() {
    if (Dummy.instance) {
        return Dummy.instance;
    }
    Dummy.instance = this;
}

Dummy.prototype.value = 'fail';

Dummy.prototype.setValue = function (value) {
    this.value = value;
};

Dummy.prototype.getValue = function () {
    return this.value;
};


// Используем
var foo = new Dummy();
var bar = new Dummy();

bar.setValue(123);


// Тесты
console.log('foo === bar ->', foo === bar); // true
console.log('values:', [foo.getValue(), bar.getValue()]); // [123, 123]


// Bonus level
baz = Dummy();
console.info('baz === bar ->', baz === bar, baz.getValue()); // true, 123


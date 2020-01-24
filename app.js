var list = ['Chi era Commodo?', 'Chi era suo padre', 'Quando nasce?', 'Commodo attua una politica di:'];
var correct = ['Imperatore','Marco Aurelio', '161 D.C.', 'difesa dei confini']
var l0 = ['Imperatore','Domiziano','164 A.C.','conquista'];
var l1 = ['Funzionario','Antonino Pio','161 D.C.','-'];
var l2 = ['Gladiatore','Marco Aurelio','171 D.C.','-'];
var l3 = ['Prefetto del Pretorio','Adriano','138 D.C.','difesa dei confini'];
i=0;
c=0;

new Vue({
    el: '#app',
    data: {
        question: list[i],
        button0: l0[i],
        button1: l1[i],
        button2: l2[i],
        button3: l3[i],
        result: '',
        color: '',
    },
    methods: {
        check: function(val){
            if(i<4){
                if (this.question == list[i] && val == correct[i]){
                    console.log('Correct' + " " + this.question + " " + val + " " + correct[i]);
                    this.question = list[++i];
                    this.button0 = l0[i];
                    this.button1 = l1[i];
                    this.button2 = l2[i];
                    this.button3 = l3[i];
                    this.color = 'green';
                    c++;
                } else {
                    console.log('Error');
                    this.question = list[++i];
                    this.button0 = l0[i];
                    this.button1 = l1[i];
                    this.button2 = l2[i];
                    this.button3 = l3[i];
                    this.color = 'red';
                    
                }
                if(i==4){
                    this.result = "Il tuo risultato è "+(c*25).toString()+"%";
                    this.color = '';
                }
            }
        },
    },
});
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
        color: '#a4adb1',
        value: '',
        retry: 'none',
        link: '',
    },
    methods: {
        check: function(val){
            if(i<4){
                if (this.question == list[i] && val == correct[i]){
                    this.question = list[++i];
                    this.button0 = l0[i];
                    this.button1 = l1[i];
                    this.button2 = l2[i];
                    this.button3 = l3[i];
                    this.color = '#45ad4b';
                    c++;
                } else {
                    this.question = list[++i];
                    this.button0 = l0[i];
                    this.button1 = l1[i];
                    this.button2 = l2[i];
                    this.button3 = l3[i];
                    this.color = '#d64b4b';
                }
                if(i==4){
                    if(c*25>50){
                        this.color = '#45ad4b';
                        this.result = "Hai ottenuto un punteggio del "+(c*25).toString()+"%. Bravo ;)";
                        this.link = 'whatsapp://send?text=Ho fatto ' + c + ' punti nel quiz su Commodo';
                    } else {
                        this.color = '#d64b4b';
                        this.result = "Hai ottenuto un punteggio del "+(c*25).toString()+"%. Potevi fare di meglio :(";
                        this.link = 'whatsapp://send?text=Ho fatto ' + c*25 + ' punti nel quiz su Commodo';
                    }
                    this.value = 'none';
                    this.retry = '';
                }
            }
        },
        redo: function(){
            i = 0;
            this.question = list[i];
            this.button0 = l0[i];
            this.button1 = l1[i];
            this.button2 = l2[i];
            this.button3 = l3[i];
            this.value = '';
            this.retry = 'none';
            this.result = '';
            c=0;
            this.color = '#a4adb1';
            this.link = '';
        }
    },
});

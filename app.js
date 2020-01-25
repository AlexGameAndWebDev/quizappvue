var list = ['Chi era Commodo?', 'Chi era suo padre', 'Quando nasce?', 'Commodo attua una politica di:','Come si chiamava il gladiatore che fece da mentore a Commodo?','Con chi stipulò trattati di pace Commodo?','Perseguitò i cristiani?','A chi affidò il mantenimento delle entrate/spese dello Stato?','Che opere fece costruire?','Fece delle liste di proscrizione?'];
var correct = ['Imperatore','Marco Aurelio', '161 D.C.', 'difesa dei confini','Narcisso','I quadi e i Marcomanni','No','A dei funzionari','La colonna Aureliana','Sì']
var l0 = ['Imperatore','Domiziano','164 A.C.','conquista','Narcisis','I quadi e i Marcomanni','Sì','Ai senatori','La colonna Aureliana e un tempio','Sì'];
var l1 = ['Funzionario','Antonino Pio','161 D.C.','Non lo so','Augustus','I barbari','No','A dei funzionari','Il tempio per la dea Venere'];
var l2 = ['Gladiatore','Marco Aurelio','171 D.C.','Non è scritto nella presentazione','Nersini','popolazioni del Nord Africa','Non lo so','A proconsoli fedeli a lui','La colonna Aureliana',];
var l3 = ['Prefetto del Pretorio','Adriano','138 D.C.','difesa dei confini','Narcisso','Gli ebrei', 'Forse','A sua sorella e sua moglie','La colonna Aurelia, il tempio per Venere e un museo','No'];
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
            if(i<10){
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
                if(i==10){
                    if(c*10>50){
                        this.color = '#45ad4b';
                        this.result = "Hai ottenuto un punteggio del "+(c*10).toString()+"%. Bravo ;)";
                        this.link = 'whatsapp://send?text=Ho fatto un punteggio del ' + (c*10) + 'percento nel quiz su Commodo su https://quizapp2gi.netlify.com'
                    } else {
                        this.color = '#d64b4b';
                        this.result = "Hai ottenuto un punteggio del "+(c*10).toString()+"%. Potevi fare di meglio :(";
                        this.link = 'whatsapp://send?text=Ho fatto un punteggio del ' + (c*10) + 'percento nel quiz su Commodo su https://quizapp2gi.netlify.com';
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

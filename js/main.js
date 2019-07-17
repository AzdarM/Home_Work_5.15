const main_data = data => {
    const txt = data.text;
    const $result = $(".result");

    for (let z = 0; z < 5; z++) {
        txt[z] += '. ';
    }
    txt[5] = txt[5].charAt(0).toUpperCase() + txt[5].slice(1) + ' ';
    txt[6] = txt[6].charAt(0).toUpperCase() + txt[6].slice(1) + ' ';
    txt[7] = txt[7].charAt(0).toUpperCase() + txt[7].slice(1) + '!!!';


    $result.html(txt);

    $(document).ready(function() {
        $(".btn").click(function() {

            const vars = [];

            for (let z = 0; z < 6; z++) {
                vars[z] = $(`.var${z+1}`).val();
            }
            const speach = $(".speach").val();


            const summa = [];
            for (let z = 0; z < 7; z++) {
                summa[z] = txt[z].replace(/{var(\d+)}/g, (_, n) => vars[+n - 1])
            };
            summa[7] = txt[7].replace('{speach}', speach);

            $result.html(summa);
        });
    });
}

$.getJSON(
    'https://api.myjson.com/bins/jcmhn',
    function(data) {
        console.log(data);
        console.log(data.text[0]);
        main_data(data);
    }
);
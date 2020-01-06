'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        name: 'musik',
        categoryImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFRUXGRoYGBgXGB0YGBcXGB4aGBgXGBgaHSggGBolGxgYITEhJSktLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy0lICY1Ly0tLzU1LS0tLS8tLS8tLTAtLS0tLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAH4BkQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIEBQYHAwj/xAA+EAACAAQEAQkGBQQBBAMAAAABAgADESEEBRIxQQYHEyJRYXGBsTIzUnKRwRQjQqHRFWKCkggkQ7LwNFPh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAlEQEBAAICAgEEAwEBAAAAAAAAAQIRITEDEkETIlFhIzJxgQT/2gAMAwEAAhEDEQA/ANs/Ep8a/URXHw736jf6n+ISZLfC30MWVZy09ofUQCZWIQADUuw4iIGfIYsxCsQSSDQ7VhE6U2o9U7nhFgw81QigkCgHHugE4WcoRQWAIUAgkAg02MQ2MksXYhWIJsQCQfAwjFSyXYhSRqPDvicwUwCWoJANBuYBOBmqstQzAEC4JoR5GIrMJbNMYqpINKEAkGw2IhOPlkzGIBIJ3AiQyrHSqdF0idIgqyahrUMTpLLuAeEB0y2YFlgMQpvYmh3PAwwzNC0wlQWFBdRUfUQnM0JmMQCRa4FRsIkcqYLLAJoamxsd++ATlThUoxCmps1j9DDTNlLuCoLDSBVRUVqeIhObKWmVUEiguLjj2Q8ychUIax1GxtwHbAFlDBFIfqktWjWNKDtjhm41spTrCn6b+kFnA1OCoqNPC/E9kd8mOlW1Wvxtw74BOUHQG19WpFNVvWCznr6NHWpWum9Nt6QnOusV09ax2v2dkHkx06y3V29q21a7wAyfqFtfVrSmq1d9qwvNzrC6OtQ3039I4Y7FpPly5kl1moakMh1KRtYjvBheTDSzarWG9vWALKBoYl+qKfqt6x3zdg6AIdR1A0W5pQ3tBZydSjT1r8L8D2Q3yddLksKDSbm3EdsAWVIVerAqKG7Cg4cTD3NHDSyFIY1FlufoILN2DJRbmosL9vZDLKlImVIIFDciggCy2WVmAsCovcig27TEjmMwNLYKQxNLA1O44CCzVwZZAIJtYXO4iNy1CJqkggXuRQbHjADASmWYpZSANyQQBY8TErjZysjAMCSLAGpPgIGYODLYAgmmwud4iMDLImKSCBXciALCyWDqSrAAgkkEAeJ4RN4mepRgGBJBAAIqTThAxkwFGAIJKmgBvtEFhpRDqSpADLw7xACTIcMpKsBUcD2xPviEoesv1ECfNUqwBGx490V2XKao6p3HAwAGHf4G/wBT/EWT8Snxr9RBmcvxD6iKx0LfC30MAo4d/gb/AFP8RYkxCUHWXbtELE5fiH1EVqZKap6p3PAwC50hizEKxFTfSe3widw09QigsoIUAgkWNIVJmqFWpGw4xAYmUS7EKfaPDvMArFyWLsQrEEkggEg+cTGCmqqKCwBAuCaEeIheDmAS0BIBCioJ7ohMdLJmMQCRXcC0AvHymaYxVSQdiASDYcREnl0wLLUMQpFbE0O54GFZe4EtQSAabGxiKzJCZrEAkWuBUbCAVmUstMJUFha4FRt2iH+WOFl0YhTU2ax+hg8rYLLAJAN7Gx3hhmqlplQCRQXFxAKzVCz1UFhQCqiorfiIc5QwRCGOk6q0axpQcDCsoYLLo1jU727O2GmcDU4Kio0i4vxPZAKzdS7AoCwpSq3490dcnOgNr6tTbVav1hWTHSraurfjbgO2OOdDUy6etY7X9IA846+nR1qVrpvTbekHk/U16+rWlNVq0rtWDyXq6tXV23t29sFnfW0aetvWl+zsgDzg6wujrUJrpvTxpHPKBoZi/VBH6resHkw0ltXVsN7dvbHXOTqVdPWvwvw7oB/+JT41+ogRWuhb4W+hgQFo1jtEVZ0NTY/SEUi2LsIBEphpFxsIrmJQ62sfaPrCJw6zeJ9Ys2G9hflHpAIwbDo0v+lfQRBY5T0jWO/ZCMWPzH+ZvUxYMB7tPlEBGY/OJWEwbYicaLLQsRsSf0qO8mgHjGH81ubzcXmuKnzF1NOlszEbJRk0r4UAUeEHz58pelxLYOW35cpg0wj9UynsnuUHbt8I0bmU5LDCYFZzrSdiKO9d1T9Cd1r+Jjc4ibXfKjSUoNt/UxGZstZhIFbCE5t71vL0ESmT+6HifWMKTkxpLva5hlnQrMFL9UbX4mE50PzPIfeH2R+7PzH0EAnJDRDW3W4+AjhnYqy0vbheE577Y+X7mHGQ+y3j9oBOR2DVtcb2iuc7yzWwE0SGImBGY6T1jLBTpAKX9mvpxiwZ8Lp4H7RkfOVmglTJOMw06W8zCu0qdKDV6s4GzgH2TpZT4r2RcexC8wedTEzAYcu5lTJcwBNR0KwpM1Ba0Borbdsb1nd1Wl7n0jy1zbzXXM8LoXUS+kj+xgVc+Sknyj1BkPtN4CLl+QWSCjtW1vvDnO7oKX6w28DBZ77C/N9jDXIx+YflPqIyCyYUmXFOqftD/NzWWaXuNoLO/d/5D7xH5N70eBgCypSJoJFN/SJTNCDKal9tvEQM490fL1EROVD81fP0MAMuUiatRx+xiZx7Ay2AvaBmfum8PuIg8vH5ieMAMGp6RLfqHCJ/FMCjX/SfSBjvdv8AKfSK9hB10+ZfUQBSEOpbHccO+LK7ihuNoGI9hvA+kVeWLjxEAAh7D9ItWsdo+sGYqVIBTIew/SLRLcUFxsIWIzyfyhljH/gmVg7LqVrFSSGYqRuDRT21iyW9JbJ2m56HU1uJ4d8WLCMNCX/SPSFyPZXwHpFbxY/Mf5m9TEUrGKeke36jE5gGAlrU8IXgfdp8o9Ir2auFeYzEBVqxJ2AAqSfKA65kpM1qCtx6CJbK2pKUG2+/iY48msfLn4aVNlNqlutVNCKip4G48Ij81H5reXoIBearWaSBWw9IkcoNJd7XMKyj3S+J9TEZnPvfIQCs5FZlhXqj7w8yQ0Q1t1jv4CFZJ7v/ACP2hlnnvB8o9TAKzsVZaXtwvxjtkdlatrjeFZF7DfN9hHDPvaXwMArPLlKX32v2QMjtrrb2d7dsKyDZ/L7wWf8A6P8AL7QCs8uFpe52vHLJBRmra3G3GDyHd/AfeOufeyvj9oCS1jtECKnSDgLbFSfcwCe+LWq2EAUn2R4CKxifbb5j6wJx6zX4n1iyYYdRflHpADBe7T5V9BFP5W5smESdPmbJWg4sxsqjvJp/6If4s/mP8x9TFQ59MLqyiU/GXNlnx1Ky3+sXHsrFOTuEOOzCTLe/Tzh0h2qGbVMP01Ru/KnlphMLjlwbay7aB1FBWXqACBr17LAG0ef+SmbDC4yTiGUustqsoNCQQVNK8QDXyizcj5ZzPPUmGtGnGea7iXL6yg+SqsanPbOnpjKfdL5+piKzj3p8BBZqfzW8vQRKZQPyh4n1jDQsk915mGGee8Hyj1MFnPvPIfeH2SXln5j6CATkPsN832EN8+9pfD7wWee2Pl+5hxkfst4/aAZ4bFdFh8RN/wDrRn/1Ut9o8iTMQzFmJqXuxPEk1J+sbtz4cullBsBIIM1kKzm4S0cewP7yv0B74wSLLoa7/wAeMg6TFTcWwtIUKnzzK1PkoP8AtG3Z97K+Jilc3/J04LLZCuKTJpadM7i4XSvkgUeNYuORe03gIUIyH228PuIdZ77sfMPQwWeDqL832MNckP5h+U+oiBOSe8/xP2iQzr3R8RCc6H5f+Q+8Mcn955GARlHvR5+kS2be6by9RBZuPyj5eoiKys/mr5+hgE5Z71PE+hibzH3b+EJzIflN4fcRC5efzE8YBGB94nzD1ixYz2H+U+kJxo/Lf5T6RX8Keul/1L6iARh/aXxHrFpmbHwMIxA6reB9IrMo3HiIBCxboIrFTDd8ATRQsxxqjlNLLMKK8qWD3tJCgeOt6ecbSFjy9yozE/1DEzluUxDle8ynovl1BHfwTdrh57qT/W74pgGYkgAE1JsBfjWLHl05XlIysGUqKEGoNuBEZjzs8qJsuVIkytHRYmSWckEtTqadJBoNzwMRnNNi2aVPUk6FZWFTYFg2rwHVBjP0vs9l+r/J6tCxvvH+Y+sR/OFnkrDZVMV2o8+S8mUvFmdStQOwVqTwiu8red2VIQSsEFnzQAGmNXokNOFKGafA07ztGM5rmuIxcxp093mtxY7LXYACyDsApFw8VvNbyz/DYOaXEasvVTT8uZMTys4/8zGqZT7pfP1MZH/x4xs0riZIRDJVg7OWOsO4CqoWlCtJZNajzjRs0P5reXoIz5f7VrHoeb+9bwHpElk3uvMwrKR+UPP1MRuce8PgI5qGd+8/xH3h7kXuz8x9BCslvL/yP2hlnfvB8o9TAHnvtr8v3jvkPst4iFZHdG+b7COGe+0vgYBWf7p5/aBkH6/8fvCsi2fy+8Fn1tHn9oBWf7J4mOOQ+03h94VkW7eA+8dc89lfH7QEpAipV74EBaujHYPpFYaYam5+sAz2+Jvqf5iyrJWnsj6CAEpBpFhsOEV3EOdbXPtHj3wU6c2o9ZtzxMWCRKUqpKgkgcO6AGEUGWhIHsj0jOOd2Try/Fivs6XH+LqYtWKmsHYBiAGPE9sVvngzWXIyhlahmYgLLXtNwzN5AfuIs7SvNEXfmdmsMzSnGXMB8NNfUCKRG68wvIlkH9RnWDoySUI3UkVmHxpQd1TxEIta7lQBlKSK77+JiNzViJhAJAoNrQMzcrMYKSBawNBsOyJHK1DSwWAJqbm537TEBZOKy73ud7wyzk0mAC3VG1uJgs2Yq9FJUUFhYceyHmUKGQlusdRub8B2wBZKKoa363G/AQ3zttLLS1iaC1aQM4Yq4CnSNPC3E9kdsoUMrautel78O+A8eZhjHnTXmzDV5jFmJvdjWJ3m5ycYrHyUYVRT0jjtVL0PcW0jziP5VZWcLjMRhz/25jKPlrVD5qRF6/49TUGZTFalXw7qte0PLYj6KfpGp2N5yQ1L1vtv5wvO7BaWudrQnOeqF09Wta0tXbshOTHUW1daw3v6xkJyU1Y1vbjfjDnOhRBS3WG1uBhOcDSo09U1vS3A9kN8nYs5DHUNJ3vxHbAJyc1mUN+qd79kP83FJdRa42hObqFSq9U1FxY8eyGWVMWmUYlhQ2Nx+8AnKmJmAEk7734RJ5ooEpiBQ2233EJzRAsslRQ2uLHccYjcucmYoYkg1sTUbHhAJy5yZigkkV+xiZx6gS2IAFoRmCAS2IAB7QKHeInAzCZigsSK7Emn0gEYNyXS59ocYn8UgCMQB7J9I5Y8Ist2oq0UmthSg3rwiFws8lk6xIJXjUEEjvuIBMiYdS3O4498WSYgobDbshE6UoUkKNjw7or0uc1R1m3HEwCFmHtP1i09GOwfSEmSvwj6CKx07fE31P8AMAYmmu537Y83Z42jEz1rXTOmrXt0uwr+0ethJX4R9BHkDlXN1YzFEbHETiPAzHMdMMtSufkx9jmbmsyYktXcsspdEsH9KAkhR3Xg5fKGcmHmYVJhWTMbW6gAazQLQtSumijq1oYjNBVbilq/WGeqpjrMuo4Y4btqy8mOTM/HzCsoBUWmuY3soDtbdmoDRR+0aXzm5ZIwOTYfDSECiZNTU1Ou5VXcu54kkDw2FhFw5ouT0vD5bKalXngTnJvdwNIHcFoPrEXzq5K2KkOEN5LGYq9oCsGUdhof2i4578kx+Hb11izHmfzQysf0VSFnoyU/vXroforD/KPR2VgGUpIqb3PiY8iYSe8mak2WaPLYOp7CpqK93dHovk7ynXHSRPlkpsroD7uYANS24cQeIMT/ANHjuNXx5Sp3NWImkAkC23hEjlArLqb3O94GVoGlgkAm9zc7njDDNWKzKKSooLCw/aPM6BnDUmUFuqNrdsPMlFUNb9Y734CDyhQyVbrGpub9nbDTN20uAp0jSLCw3PZAHnRoy0tbhbjHbJLhq3vxvEPmXKCVhMM02b121aUQnrOaCwrWg4k8IieTGY4ibJOInsFWa7NLF1CqKLpGw02sdySY36X19nO+XH29Pla87NClLb7W7IPI76639ne/bB5N1tWrrUpSt6b9sFnXV0aerWtaW7N6Rh0KzuwWlrna0cskNWat7cb8YPJ+sW1dawpqvTftjrnI0qunq34W4d0BJdGOwfSCisdM3xN9T/MCAsn4VPgX/URXXxD1PXb/AGMH+LmfG31MT4wcunsL9BACXhkIBKKbDgIgp89wzAOwAJAAY0ArsIE3FOCQHalTxiak4ZCoJRSSASSBUmkBxZ5UuT0s3QFVNbuwFgBUsSY8vc5fK7+o4rWlRIlgrJU8ATVmpwLGnkBFy56eW4fXl8hyVD/nEeyNBqspe4EAnwAjH4vSHeVyQ0wFkZ5aUeaEIDdEpGuleNI9NZjypweHCf8AUpJllEaWmvSQhVStEFwKd0ZvzW8isPOwhxGKkiYZjHo9RIARbVoCN2r5CLweaTAzZi4lNUg6fYlhDL1AkB9ExWG3DbjF1JxTaV5L8ustxcxcPLnrMnnUQGluC9KmgZ1GogcK1oO6O3LbOGwcmdOlqzdGmrQh0jhc02UVqSL0BiOw/J+bhpy/9ZNdU/R0UmWhqtrS5akEVBr3RapZl9A02cFKhWLlhXqita14UicKyrm550Z+MxsvCYiRKYTS9HFda6VaYAdROoALTgY1DNWKOAhKjSDRTQVqb0EYDzMyVfMpk5ep0cuY6KP06yEpXuVyI9D5WgmIS4DGtKtc0oLQoLKVDqS41HVSrXNKDtjjm50MoTqilTpsPOkFmjmWwCHSKVothWpvbwjtlYDqxejEGxa9BTviDzVzupXMZz2uUVutViwlSm1EcAQwH+Jiq5RmUzDTpc+UxWZLYMpHdw8CKjzi888Jw8/MZrYM9JplAzigqivKGkkMLEBAoJ2BjOo3lxqxI9a8hM6l4/DieOsCBVW6xRxUMt9r/UUiWzYaAujq1Jrp6tfpHnPmh5WthMQZDOVkzyBWtAszZWPcdj5dkbByu5Zpl8jpZyGczMElyy1KtQlmJIOkAAVsdxEs/As+UkuxD1YAfquAfOO+bKEQFAFOqlVsaUNqjwjyvnvLfGYnEdP0rS9LEyllnSJQrUAaaVI2qbmNp5muV83MUmy8T13khesf1hq0YrsGFCKjti3Ga4ouuVuXejksKE0Y1FbcDDzM5YSWSoCmouoofqILM5YRKoApqBVbGl+yGmWzC76XJYUNjcfvGFJy6YWmBWJYXsxJG3YYkMxlKstmUBSKUIFDuBuILMZSpLLIArClCBQ3NN4YYCczzFVmLKa1BNQaAnbxEBX+SOfPiMZi5EyYG6GdpVCb9HoG616w1Amp4nwi5YySqoxVQCBYgAEeBEYnzgNMynPExyLWXiFHVWxoAsuagp+qysD2mNJzDPVw5lmezmW81ZTHdV11CtMvZCwAre5EdM8erEiB5yM0mSsvmuJhDAy9NTqqda2o3GlT5Q85oUY5QjzAKkzjLtTSgZtIXsUEGnYKRA/8hsE4wuGdABKWawcCx1sv5bd4AEwf5CJnm9zgPhcGmpEDrSXKVifypbCWQa+0wtqNAKmNWfxw+Vhkz3LKC7EEi2o9sT74ZKGiL9BCJuFQKSEUEAkWHCKTjuWKSmeU0xumVGZZbky+mKgkKjsNJqRTfjtHKS1dpgYl/jb/AGP8xYvwsv4F/wBRDPLZkifKSbLVCroriwrpcVXwijctuXH4CTq1l5z16NNW/wDe3Yg/faGhG85vLQ4SSZEua34iaCBRjWWhsXPYTcDzPCMGw8tpjqiAszEKoG5YkBQPEkCOma5jMnzXmzWLO5qx7/DgBsBwEXbmZyLpcX+JYdTD0I75rWT6Crf6xf0x+6jOcPBrhsSMMpqZUqWrntmaase7cRUla8S3LPFvNx2Kd/aM6YP9WKj9gIhqxrPK+yYYSTUejebDMZj5Zh+u3VDJudkZlA+lIv8A+DEyQRszoRroCwLAjUCeI3jHP+O2aBmxGEmUYUE6WCK0oQkynjWXF05x+UT4LCznRirH8uWAaUZuIHcKnyiXnLhrqMO5Q5S+EnPImlS6GhKkMD2Hu8DcR05FcrpmXYnpAvSSmoJss0Ope1a7OL0PkYqrTjWtb+vjCnJjt5fN7uOGHrXqyTm6T0WdhplZLqCpUkC4uCBswO43BiayyWHl1YBjU3YVP1MeY+bnlq2XT+uvSYd6CYhvpp+tAbBhXbiI9ENmKuFeQ9ZTqGUoeqQeNo87vKc5q5R6ISooDRTQVvwEOcpQOhLjUdVKtc0oLVPCDyyWHTU4DGpFWuadl4bZm5luFQ6RStFsK1N7eERWSc72IIzDQbIstNAAoBqqWPmR+0I5C4ifj5mHwLf/AB8OxnOaXKAgqjcPaJA8T2RCc7ucdJjdINTKQISdy12I8tVPrGhc2WCWTl8mclVmT9TTG4nS7Kg8ABt3mO1zsmnhnh9vLb8Ves36hXR1a1rp6tdt6QybNpMiVMnYpwESl361zWyg3JPYN4fZWOkDa+vSlNV6VrXeMC54s2Y5jNk16krSFQHqglVYsBtqOo3jlJt688tdLVza8oHnYrHULhHbplqxqoLMAu/YRt8MahlJ1swfrAC2rrU+sZh/x5lqyYvWgJ1pc+B6o8LnzjVM1US1BTqkm+m1R5Rc7up45rHR/wDhU+Bf9RBxXfxcz42+sCMuie/Ay/gX6RBtjZl+uYM5hN+M/t/ETIwEs/pH7wBy8HLIBKCpF7dsZrzo8t3wElpcpyJ8zUssD/toCQZlO7Yd/hFkz3lF+ElTJ01yJcutrVN6Ki23JsI8xcpM8m4zETMRN9pztwUcFHcB9zxiiNZiTUmpNyTuT2mFSlqR+/hCI6gUXx9BFx7Sty5vecvLZeEkYbFVlzJY6PV0ZKFQeqxK1IJG9t6xor5gDRpMwGUwDIUIKlSAaqRuDePIlIncj5XYzCoqyZ7LLVtQlmjISdwQeBpt94a3Tp6rE2Usgz55UKoJd3NAACbk+AjAudrnAl4wrh8IXGHQsW/Ss1rAELxUXN967RU+U/LLF46iz5lZamqy1AVFJ4gC5PeSdzFfidKm+TGazMJNXEpWqOlRWzpcuh7QQCPOPU+Y4jo6FG0JpDE1oL1uSfKPLXI7BNiMVJw6067g32AXrOSOPUDW4xbuevPzOxSSVnB5cpKFV2WYSdQaliQAvbS8dbJZOWZbut7wE6W8pp0xlZFqdZIKhAKk6tqC8Yfy55wMTjOkkYFTKw19Wj305RQVI3VT8IvTfsGf4XNMQJLSFnTEkORrQMdLf4VoT6wTZcnRdLLxCmYt2lMDLmC9mQ3VxsbMGvtD0xnN5TdvTeuafkHLk4Sb+JQGdPXTMBHsS2BAldxoanv7aR5+zvLWw2Im4d/alOyHv0mgPmKHzj0Nzcco3m5ZKmM4V01pMYncS6aXcsTQ6aVJ41O0Y7zr4uROxxn4eak0TEUuybdIKqa27Au0ZsvKxTlNLxo/K3MxmGUYbEV/Pwkzop+wLCaBpm99Si+ZMZvE3ySnSun6GeSJE8CXMI3WpBWYOFVYA34V7YmPPC3jlCRfOablbLwE6eZzFEmSx1lBZgyGoWgGxDN9BFZz/K1w2JmSw6zpamqOptMQ3UgjjTfsIMRVYmtdj0TkPO3gJ87opzzJamytOUCWTwqQx0eJoI0PHS1RNUsBTahHYY8aERrPKDltOOT4aXKmsrUkypjK4LUWWTTUt1YlQSK1AIrvGphu6NtpwMx3cK9SprUHa20VHlPzj4TCg9FLLlZ7YdnHUCTJYBmC4qaA0qLHtjDslzrHYR/xMqY6kWqxqDqGxVj1rEHbsiNx2azHWYrmped05NL62DBjawB1fsI3l4fXmptZ+cHlhMxuIl4hKqkmglaqMdWrUXIpSpIFuwCKxKxWJxU4IZ0x3nsksl3Y6+sNAYk3ANDfaGkrEkIycGp5UINuzaBgkBah42/kxm6yskSbktr0HzkzhPy3EyumWY0kK5UMpZTLZSaqLrau/bFE5jJ018aVqWlyZE5lHBGcy6kHhUov0igYtXBLMS3DUTUkUpet6UtFo5ncc0rNJAB6s7VJcfErAmn+yrHS4ax9SZS8xvmLzjokabOm6ZaCrk7aRuO804R545c8rkx83pFw6SSpIBQAM6EnSZp4uFCjs9rtixc/eJb+oCTWktJSFF4VepZvE0Ar3RmSrWscvXWtXtby17ms5RPh8Hi8VOc9DLEmUgFLmWJh6NR2npEFe/ujNOUedTMXiJk+aes5sBsi/pRf7VFv3NyYXjs1mfhZWEqAktnmkAUJeZT2u3SBbs1GIYxM+ycjEerObLkmuDy+TLmIOlcdLNqL63vp/wAV0r5R5t5HNIXFy5uJP5Mo9Kyi5fR1llqNiWbSLkDeNgyfnnlzpwlOkySrNpRyyuorYawFGkVtUVpCYZWbist50ML0eaYtaUBmah4OA33irRpPP3hNGYo1KdJIlsfmBZT52EZtEy7IneRfKR8vxSYhBqoCrLWmpG3FeB2I8ItPOdy/k5jJw6SUdChZpusCpagC0Kk1tWM5gRNmnbCyi7qouWYAeJNBGgc5PIM4KXIxEslkmAJM/smqKGn9pofOsQXNfl3T5phUIqA+tvBAX+0eiOVuXLiJU3CtaWwoBT2WoGDDvDXjcv26/LOU3XlFos/I/lniMEGly3Gh9tY1BG+JQbCuxiCzfL3kTnkzBR0Yqf5HcReGcZl1TW43fkxzqaiJGIBlTFWpZaBXpu1LAEi9rRdsj5VYPEYebPM1H6EMzAspdUUVqVBqAb0jzCkwzEAr10HV/uXs8RBYSfQMQaMQQaW6tBbwjtrDL4/65T3ny6Z5mDTp0ya27uzEdhYk08q0j0rzVtKm5bhwCr9HLRSNyjUqykcDW/nHlxEJNaGld/3pE9yYz6dhJqTlMzo1dekVXKB6VIU07u2scpzvbf8AXp6lzP8AL09H1a1rTjSlI87c8kimPaZpILqpJP6iBpLDutTxBjX5fOBgtEt57OwmU09SugEVYmnAWBpWMd5289w2KxmvDPqliWqizC4JJswrxjf08sZfaaZ+pjnZ63ZlhOUJCYMo3QtImfmMlq9YUmsB7TaSVJ7j2x6R5PY5MUomBxNlsNSNuDcio/cR5EkMa242I7RHpbm0rLyfBstmIcE9o6R4znlcput4YTG8L7+Bl/APpAiD/qE34z+38QI5uiY/pkr4f3P8xEnMZtaBv2H8QZzOb8X7D+IovPVynl4OQMNJtiJ6nUQxrLlGxbuLXUf5HhAZ1zvcsFxmI6GQR+Hkk0I2mzdmmd6i4XuqeMZ/AMCLQAIU79nlCpSE7bwhlIsbGLzJtPkYmHtMPMJMV+qwAJ2YdveNjDGFI1CD2RvDy3G/pMsdwTCChTtUkwmOdaPspnFHZg5lsJb6WUkENpNACLivs+cMq1g0ele+Exd8RJ2WZhpThBVrbjCYEJlfk0msDmrSsJiJCg1ntLDHVTSsskldPEsSL12FIh6WjpiTUg9qr6Rzl7iN2zeknRMGDAYUJEFHPqtJPNuusuaBZhRvmFv3iMiSy865UyVx9tfLcRHlbV4GO3m+77/y5eLjeP4EDDt8wmNLWWXPRy6lV2ALe01BuT2mG4l9UnsI/eEoKxnC3G/66Cg5jE3MK6I9n7iOZjN3JyBCpUwqQRuITAEYipdTrW/HaDyHNThsTKxAFTKmK4G1QpFRXvFRC8AKKRa43Jv5dkRb6BUVJtanbwr3R7s/txlebx92JXldyim5hiXxM2lSKKo2SWvsr++/EkxFy9qkbXPedgI4GADHkmWq9Fg5jkkk7mEwDBgRhXeXZfH0g5MhnqFBNr9gHaTw84XKXUoIFwaEeOxgYuewHRVooNwNie09se7cx8cvw5750vHPDncrFthHSbLmMsorM6M6lQ9U6a8blvpGdwqtoTHjyu63AgQIEZV0kT2Q6kZlYbFSQR5iJ7LeXGPknq4qaw7HbpP/ADBpFdgRZlYlkqw8rM8/HTPxBRUfSquErQlbarm1bWivmFS3ofWCaLld3bOM1wOVMKkMNwaw8x6JQOlRr4cB8QB8YYQ6kzKoyHh1l8eI8xFxvGjKcyuNbekFrMHSghBjLSYlZoWWTJqQimrE3NzVgtLhdPDetYjsVMUu5UUBJIHYK27fWOcpr1pX+YDBh3ftHTLyWzliYTG8Qg90eiOYXGHEYBpUzrCTNcLfYMFcXHezx52JjXf+P+ZMjYyWpuwlOOPsl1ax+db9wjk6N3/pkr4f3P8AMCIn+qTfi/YQIBXKObhsHhpmJm1CS1rSt2OyqO8kgeceUeUWczcZiJmInGrzDXuUbKg7gKCNG59uVM2bNl4PaXLAmtS2p2B0+SrXzJjJ4AQIECAWJlNo6s6FLikyu/Ar3w3gRqZa4SyBAgQIyoQIECAECBAgBAgQIA2NYAgoEXf5AMCBAiDrhJxR1YcD+3EQ8mhFL1XUAQVFdO/huIjocS6uaV/TfwEdfHlxpjLHnbvJxCaGWhFbgbiouBWGcyaTv9OH0jpK01pT9zDj8Kldj9Y3fbOSbjO8caYQZMd5mFpsfrHIS7xy9cpw6TKXomkdJUwA7Vjm+8FGd6vBrcOJ7AgaT4jjHAGCjpOGx7R/+RrftykmuHMwIMmCjDQQatS4goEBMYHFqqOyqNdL22/uXsiIY13jphpulgeGx7wbGDxUjS5X6ecdss8s8Z+nPHGY5X9uRMFCnFDCY4ugQIECAECBAgBDmbJAtUGgBqNr8IbQ6U9Q95A+kax1pnI1MLkvpYHsMJMFEl0rviXqTHCFzDWn/u0JELzSTUAQbC8HsAe2EgwvHAIxoHMbPUZqiNtNlzJfmAJg/wDCM/ie5BY0ycxwkxdxOQeTnQf2YxFes/6VL7D9YOI/+rTP7fof5g4D/9k='
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
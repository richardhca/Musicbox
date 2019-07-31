// const FuzzySearch = require('fuzzy-search');
// const sessionStorageHandler = require('../javascripts/sessionStorageHandler.js');
//
// const people = [{
//     name: {
//         firstName: 'Jesse',
//         lastName: 'Bowen',
//     },
//     state: 'Seattle',
// }];
//
// const searcher = new FuzzySearch(people, ['name.firstName', 'state'], {
//     caseSensitive: true,
// });
// const result = searcher.search('ess');

$(document).ready(function () {
    // $('.search_area').toggle();
    $('#track_search').on('click', function () {
        const search_area = $('.search_area');
        if (search_area.hasClass('hidden')) {
            search_area.slideDown('slow').removeClass('hidden');
        }
        else {
            search_area.slideUp('slow', function () {
                $(this).addClass('hidden');
            });
        }
        // $('.search_area');
    });

    $('#track_search_close').on('click', function () {
        $('.search_area').slideUp('slow', function () {
            $(this).addClass('hidden');
        });
    });

    $('#track_search_input').on('keyup', function () {
        console.log($(this).val());
        // sessionStorageHandler.test(result);

    });


});
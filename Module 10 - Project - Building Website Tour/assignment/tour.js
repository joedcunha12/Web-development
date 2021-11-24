var tour = new Tour ({
    storage:false
});
 var name = '';

tour.addSteps(
    [
        {
            element: '#col-1',
            placement: 'bottom',
            title: 'Live Class',
            content: ' Live Class is everyday at 5am. <br> <input type="text" id="name">',
            onNext: function() {
                 name = $('#name').val();
                 console.log('next button pressed');
            }
        },
        {
            element: '#col-2',
            placement: 'bottom',
            title: 'Flexibal schedule',
            content: function() {
            return name + ', Flexibal schedule is available.';
            }
        },
        {
            element: '#col-3',
            placement: 'bottom',
            title: '24x7 Support',
            content: '24x7 Support for students.'
        },
        {
            orphan: true,
            placement: 'top',
            backdrop: true,
            title: 'Thank You',
            content: 'Thank you for visting our sites'
        },
    ]
);

$(document).ready(function() {
    $('#start-tour').on('click',function( $event) {
        tour.init();
        tour.start();
        $event.preventDefault();
    });
});

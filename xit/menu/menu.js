/**
 * Created by morganheimbeck on 9/28/14.
 */
steal('can', 'xit/models/beer.js', './init.mustache', 'jquery/dom/form_params',
    function (can, Menu, initView) {

        /**
         * @constructor xit/beer/create
         * @alias BeerCreate
         * @parent xit
         * @inherits can.Control
         * Creates beers
         */
        return can.Control(
            /** @Prototype */
            {
                /**
                 *  Render the initial template
                 */
                init: function () {
                    this.element.html(initView());
                },
                /**
                 *  Submit handler. Create a new beer from the form.
                 */
                submit: function (el, ev) {
                    ev.preventDefault();
                    el.find('[type=submit]').val('Creating...');
                    new Beer(el.formParams()).save(function() {
                        el.find('[type=submit]').val('Create');
                        el[0].reset();
                    });
                }
            });
    });
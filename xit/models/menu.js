/**
 * Created by morganheimbeck on 9/28/14.
 */
steal('can',
    function (can) {
        /**
         * @constructor xit/models/beer
         * @alias Beer
         * @parent xit
         * @inherits can.Model
         *
         * Wraps backend beer services.
         */
        return can.Model(
            /* @static */
            {

                findAll : "GET /beers",
                findOne : "GET /beers/{id}",
                create : "POST /beers",
                update : "PUT /beers/{id}",
                destroy : "DELETE /beers/{id}"
            },
            /* @Prototype */
            {});
    });
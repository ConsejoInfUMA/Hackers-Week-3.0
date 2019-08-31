<template>
    <div class="columns">
        <div class="column">
            <h1 class="title has-text-centered has-text-dark">Conferencias</h1>
            <figure class="image">
                <img alt=""
                     src="https://scontent.fmad3-7.fna.fbcdn.net/v/t31.0-8/29352092_783880518479846_4038796435568151111_o.jpg?_nc_cat=105&_nc_oc=AQndVxE0cFTLCOYVJJ164oy9t6qWB8z68YViuOvn3RKZ3BjDbAEv6rEIF_ReeHvgQzw&_nc_ht=scontent.fmad3-7.fna&oh=ab5fe8a15e6f30bd3660ae92353fbdca&oe=5DE10152"/>
            </figure>
        </div>
        <div class="column">
            <h1 class="title has-text-centered">Talleres</h1>
            <figure class="image">
                <img alt=""
                     src="https://scontent.fmad3-7.fna.fbcdn.net/v/t1.0-9/57486724_1037269753140920_3556801355714658304_o.jpg?_nc_cat=103&_nc_oc=AQn8azBvCn_ozHyscvYX_7wMnN2xRhXWAnOY2bLtqxB27EaIQTmEr2rhrz6VBh16IT0&_nc_ht=scontent.fmad3-7.fna&oh=6bfcd13531c0028ecb475b910022e668&oe=5E12B994"/>
            </figure>
        </div>
        <div class="column">
            <h1 class="title has-text-centered">Videojuegos</h1>
            <figure class="image">
                <img alt=""
                     src="https://scontent.fmad3-7.fna.fbcdn.net/v/t1.0-9/57486724_1037269753140920_3556801355714658304_o.jpg?_nc_cat=103&_nc_oc=AQn8azBvCn_ozHyscvYX_7wMnN2xRhXWAnOY2bLtqxB27EaIQTmEr2rhrz6VBh16IT0&_nc_ht=scontent.fmad3-7.fna&oh=6bfcd13531c0028ecb475b910022e668&oe=5E12B994"/>
            </figure>
        </div>
        <div class="column">
            <h1 class="title has-text-centered">Rol</h1>
            <figure class="image">
                <img alt=""
                     src="https://scontent.fmad3-7.fna.fbcdn.net/v/t1.0-9/57486724_1037269753140920_3556801355714658304_o.jpg?_nc_cat=103&_nc_oc=AQn8azBvCn_ozHyscvYX_7wMnN2xRhXWAnOY2bLtqxB27EaIQTmEr2rhrz6VBh16IT0&_nc_ht=scontent.fmad3-7.fna&oh=6bfcd13531c0028ecb475b910022e668&oe=5E12B994"/>
            </figure>
        </div>
    </div>
</template>

<style scoped>
    img {
        max-height: 35em;
        object-fit: cover;
    }
</style>

<script>
    export default {
        name: 'Informacion',
        props: {
            seccion: String,
            descripcion: String
        }
    }
</script>

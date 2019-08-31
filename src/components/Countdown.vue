<template>
    <h2 class="subtitle is-size-6-mobile">
        <i>{{ message }}</i>
    </h2>
</template>

<style scoped>
    h2 {
        color: #f5f5f5 !important;
    }

    @media (min-width: 960px) {
        h2 {
            font-size: 2em;
        }
    }

    @media (min-width: 1152px) {
        h2 {
            font-size: 3em;
        }
    }
</style>

<script>
    export default {
        name: 'countdown',
        data: () => ({
            message: ""
        }),
        props: {
            event_date: String
        },
        mounted() {
            if (this.time_to_date() > 0) {
                this.$options.interval = setInterval(this.countdown_msg, 1000);
            }
        }, methods: {
            countdown_msg() {
                let msg = '';
                let t = this.time_to_date();
                if (t > 0) {
                    msg = 'QUEDAN ' + t + ' SEGUNDOS!';
                    if (t > 60) {
                        t = Math.ceil(t / 60);
                        msg = 'Quedan ' + t + ' Minutos!';
                        if (t > 60) {
                            t = Math.ceil(t / 60);
                            msg = 'Quedan ' + t + ' Horas!';
                            if (t > 24) {
                                t = Math.ceil(t / 24);
                                msg = 'Nos vemos en ' + t + ' Dias';
                            }
                        }
                    }
                }
                this.message = msg;
            },
            time_to_date() {
                return Math.ceil((new Date(this.event_date) - Date.now()) / (1000));
            }
        }
    };
</script>

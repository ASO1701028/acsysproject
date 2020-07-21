<template>
    <div id="#cale">
        <FullCalendar
                defaultView="dayGridMonth"
                :locale="locale"
                :header="calendarHeader"
                :weekends="calendarWeekends"
                :plugins="calendarPlugins"
                :events="calendarEvents"
                @dateClick="handleDateClick"
                @eventClick="eventClick"
        />
    </div>
</template>

<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import listPlugin from '@fullcalendar/list';
    import jaLocale from '@fullcalendar/core/locales/ja' // 日本語化用
    let schedule;

    export default {
        components: {
            FullCalendar // make the <FullCalendar> tag available
        },
        data: function () {
            return {
                locale: jaLocale, // 日本語化
                // カレンダーヘッダーのデザイン
                calendarHeader: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                },
                calendarWeekends: true, // 土日を表示するか
                // カレンダーで使用するプラグイン
                calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
                editable: true,
               // カレンダーに表示するスケジュール一覧
                calendarEvents: [
                    {
                        title: "報告会",
                        start: "2020-03-10T10:00:00",
                        end: "2020-03-10T12:30:00"
                    },
                    {
                        title: "ミーティング",
                        start: "2020-03-12T10:30:00",
                        end: "2020-03-12T12:30:00"
                    },
                    {
                        title: "打ち合わせ",
                        start: "2020-03-18T13:30:00",
                        end: "2020-03-18T14:30:00"
                    },
                    {

                        title: "平原、ロボットになる",
                        start: "2020-07-18T13:30:00",
                        end: "2020-07-18T14:30:00",

                    }
                ]
            };
        },
        methods: {
            // カレンダー
            handleDateClick(arg){
                schedule = window.prompt("スケジュールを入力してください。","")
                if(schedule != null && schedule !== "") {
                    this.calendarEvents.push({
                        title: schedule,
                        start: arg.date,
                        allDay: arg.allDay
                    })
                }
            },
            eventClick: function(info){
                schedule = prompt("編集", info.event.title)
                if(schedule != null && schedule !== ""){
                    alert(schedule)
                }
                info.el.style.borderColor = 'red';
            }

            // youtubeへ遷移
            // handleDateClick(){
            //     location.href = "https://www.youtube.com";
            // }

        }
    };
</script>

<style scoped>
    @import "~@fullcalendar/core/main.css";
    @import "~@fullcalendar/daygrid/main.css";
</style>
<template>
  <div class="mypage">
    <draggable v-model="tags" :options="{disabled:fals,chosenClass: 'choose',animation: 150,ghostClass: 'sortable-ghost'}" :move="getdata" @update="datadragEnd">
      <transition-group>
        <div v-for="element in tags" :key="element.id" class="dragBox">
          {{element.name}}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
      data(){
        return {
          tags: [{
            id: 1,
            name: "test1"
          },{
            id: 2,
            name: "test2"
          },{
            id: 3,
            name: "test3"
          }]
        }
      },
      methods: {
        getdata (evt) {
          console.log(evt.draggedContext.element.id)
        },
        datadragEnd (evt) {
          console.log('拖动前的索引 :' + evt.oldIndex)
          console.log('拖动后的索引 :' + evt.newIndex)
          console.log(this.tags)
        }
      },
      components: {
        draggable
      },
    }
</script>

<style scoped>
.dragBox{
  border: 1px solid red;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}
</style>

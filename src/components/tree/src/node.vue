<template>
    <transition-group>
      <ul class='fly-tree__box fly-tree__root'>
        <li class='fly-tree__node'>
          <div>
              <fly-icon name='minus' class='fly-tree__icon'></fly-icon>
              <fly-checkbox disabled></fly-checkbox>
              node1
          </div>
          <ul class='fly-tree__box'>
            <li class='fly-tree__node'>
              <div><fly-icon name='minus' class='fly-tree__icon'></fly-icon>node1.1</div>
                <ul class='fly-tree__box'>
                  <li class='fly-tree__node'>
                    <div><fly-icon class='fly-tree__icon'></fly-icon>node1.1.1</div>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
      </ul>
  </transition-group>
</template>
<script>
export default {
  name: 'FlyTree',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

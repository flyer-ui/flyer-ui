<template>
    <div class='fly-tree'>
      <ul class='fly-tree__box fly-tree__root'>
        <li class='fly-tree__node'>
          <div>
              <fly-icon name='minus' class='fly-tree__icon'></fly-icon>
              <fly-checkbox></fly-checkbox>
              <span>node1</span>
          </div>
          <ul class='fly-tree__box'>
            <li class='fly-tree__node'>
                <div>
                  <fly-icon name='minus' class='fly-tree__icon'></fly-icon>
                  <fly-checkbox disabled></fly-checkbox>
                  <span>node1.1</span>
                </div>
                <ul class='fly-tree__box'>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.1</span>
                    </div>
                  </li>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.2</span>
                    </div>
                  </li>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.3</span>
                    </div>
                  </li>
                </ul>
            </li>
            <li class='fly-tree__node'>
                <div>
                  <fly-icon name='minus' class='fly-tree__icon'></fly-icon>
                  <fly-checkbox></fly-checkbox>
                  <span>node1.1</span>
                </div>
                <ul class='fly-tree__box'>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.1</span>
                    </div>
                  </li>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.2</span>
                    </div>
                  </li>
                  <li class='fly-tree__node'>
                     <div>
                        <fly-icon class='fly-tree__icon'></fly-icon>
                        <fly-checkbox></fly-checkbox>
                        <span>node1.1.3</span>
                    </div>
                  </li>
                </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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

class BinaryTree {
    // [8, 3, 6, 4, 9, 11, 2, 5, 7]
    constructor(tree = []) {
        // 树根
        this.root = null;
        // 遍历后返回的数据
        this.mapTree = [];
        this.empty = [];
        // 初始化二叉树
        if (typeof tree === 'number') {
            this.insert(tree);
        } else if (Array.isArray(tree)) {
            this.bulkInsert(tree);
        } else {
            console.error('请输入Number类型或者Array类型的参数');
        }
    }

    insert(key) {
        const newNode = this._node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode); // 不需要对this.root重新赋值, 直接修改this.root引用地址
        }
    }

    _node = (key) => {
        const _obj = {
            key,
            right: null,
            left: null
        };
        return _obj;
    };

    _insertNode = (oldNode, newNode) => {
        if (newNode.key < oldNode.key) { // 小于的时候存放节点左子树(生成规则)
            if (oldNode.right === null) {
                // 判断左节点是否为空
                oldNode.right = newNode;
            } else {
                this._insertNode(oldNode.right, newNode);
            }
        } else if (oldNode.left === null) {
            // 判断左节点是否为空
            oldNode.left = newNode;
        } else {
            this._insertNode(oldNode.left, newNode);
        }
    };

    bulkInsert(nodes) {
        nodes.forEach((element) => {
            this.insert(element);
        });
    }

    showTree() {
        return this.root;
    }

     // 一般二叉树的深度优先遍历分为 前序 中序 后序
    // 先序遍历  根左右
    rootRL(tree) {
        if (tree.key) this.mapTree.push(tree.key);
        if (tree.right) this.rootRL(tree.right);
        if (tree.left) this.rootRL(tree.left);
        return this.mapTree;
        // [8, 3, 2, 6, 4, 5, 7, 9, 11]
    }

    // 中序遍历  左根右
    rightRl(tree) {
        if (tree.right) this.rightRl(tree.right);
        if (tree.key) this.mapTree.push(tree.key);
        if (tree.left) this.rightRl(tree.left);
        return this.mapTree;
        // [2, 3, 4, 5, 6, 7, 8, 9, 11]
    }

    // 后序遍历  左右根
    rightLR(tree) {
        if (tree.right) this.rightLR(tree.right);
        if (tree.left) this.rightLR(tree.left);
        if (tree.key) this.mapTree.push(tree.key);
        return this.mapTree;
        // [2, 5, 4, 7, 6, 3, 11, 9, 8]
    }

    // 二叉树的广度优先遍历
    mapRang(tree) {
        // 输出根节点(保存到要输出的数组)
        if (tree.key && this.mapTree.length === 0) this.mapTree.push(tree.key);
        // 当有子树的情况下,输出子树(保存到要输出的数组)
        // 判断队列是否为空
        // 如果队列不为空, 把子树存放到队列末尾, 取队列第一个进行递归
        // 如果队列不为空, 左右子树都不存在, 取队列第一个进行递归
        // 如果队列为空, 且左右子树都存在, 将右子树存放队列, 递归左子树
        // 如果队列为空, 只存在左子树或者右子树, 递归 左/右子树
        if (tree.right && tree.left) {
            this.mapTree.push(tree.right.key);
            this.mapTree.push(tree.left.key);
            if (this.empty.length > 0) {
                this.empty.push(tree.right);
                this.empty.push(tree.left);
                const obj = this.empty.shift();
                this.mapRang(obj);
            } else {
                this.empty.push(tree.left);
                this.mapRang(tree.right);
            }
        }

         if (tree.right && !tree.left) {
            this.mapTree.push(tree.right.key);
            if (this.empty.length > 0) {
                this.empty.push(tree.right);
                const obj = this.empty.shift();
                this.mapRang(obj);
            } else {
                this.mapRang(tree.right);
            }
        }
        if (!tree.right && tree.left) {
            this.mapTree.push(tree.left.key);
            if (this.empty.length > 0) {
                this.empty.push(tree.left);
                const obj = this.empty.shift();
                this.mapRang(obj);
            } else {
                this.mapRang(tree.left);
            }
        }
        if (!tree.right && !tree.left && this.empty.length > 0) {
            const obj = this.empty.shift();
            this.mapRang(obj);
        }

        return this.mapTree;
    }
}

export default BinaryTree;

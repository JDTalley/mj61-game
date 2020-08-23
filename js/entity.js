class Entity {
    constructor(x, y) {
        this.x      = x
        this.y      = y
        this.dx     = 0
        this.dy     = 0
        this.jerk   = 0
    }

    // Setters
    setX(num) {
        this.x = num
    }

    setY(num) {
        this.y = num
    }

    setDX(num) {
        this.dx = num
    }

    setDY(num) {
        this.dy = num
    }

    // Movement
    updatePosition(dt) {
        this.x += (this.dx * dt)
        this.y += (this.dy * dt)

        // Gravity
        this.dy += (750 * dt)

        // Friction
        this.dx *= (0.5 * dt)
/* 
        if (this.dx < 1) {
            this.dx = 0
        }

        if (this.dy < 1) {
            this.dy = 0
        } */
    }
}
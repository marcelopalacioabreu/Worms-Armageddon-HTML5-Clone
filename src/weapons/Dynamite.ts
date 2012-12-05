///<reference path="BaseWeapon.ts"/>
///<reference path="ThrowableWeapon.ts"/>

class Dynamite extends ThrowableWeapon
{

    constructor ()
    {
        
        super(
            "Dynamite", // Weapon name
            2, // ammo
            Sprites.weaponIcons.dynamite, //Icon for menu
            Sprites.weapons.dynamite, //Inital weapon object state
            Sprites.worms.takeOutDynamite,
            Sprites.worms.takeOutDynamite
        );

        this.explosionRadius = 100;

         // Force/worm damge radius
        this.effectedRadius = Physics.pixelToMeters(this.explosionRadius*1.8);

          // force scaler
        this.explosiveForce = this.explosionRadius * 2;

        // No requirement for crosshairs aiming
        this.requiresAiming = false;

    }


    //Gets the direction of aim from the target and inital velocity
    // The creates the box2d physics body at that pos with that inital v
    setupDirectionAndForce(worm : Worm)
    {
            var initalPosition = worm.body.GetPosition();
            //initalPosition.Multiply(1.5);
            this.setupPhysicsBodies(initalPosition, new b2Vec2(0,0));
           
           // I don't want the dynmatic to roll
            this.body.SetFixedRotation(true);
    }


    update()
    {
        
        this.sprite.update();
        super.update();

    }

}
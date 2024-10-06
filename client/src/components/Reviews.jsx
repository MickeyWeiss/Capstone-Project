import { useState } from 'react'
import { useEffect } from 'react'

const Reviews = () => {
    return (
        <>
        <div id="review-container">
            <h1>Recently Reviewed Destinations</h1>
            <div id= "jerusalem-div">
            <h2>Jerusalem</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id="jerusalem-image-1" src = "https://static.israel21c.org/www/uploads/2024/03/shutterstock_2432879029_Sergei25-1-1520x855.jpg" alt = "dome of the rock image"></img>
</div>
<div id= "paris-div">
            <h2>Paris</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id = "paris-image-1" src = "https://backpacksandbubbly.com/wp-content/uploads/2022/11/IMG_1556-3000x2000.jpg" alt = "eiffel tower picture"></img>
</div>
<div id= "rome-div">
            <h2>Rome</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id= "rome-image-1" src = "https://www.citalia.com/-/media/bynder/citalia-non-geography/blogs/rome-city-guide/blog-rome-300273-2022-rome-shutterstock_1417390817-hybris.jpg?rev=6e4a0e96269a4345a799296d555a0c24&h=480.375&w=1081.5" alt = "Picture of Rome"></img>
</div>
<div id = "positano-div">
            <h2>Positano</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id = "positano-image-1" src = "https://saltandwind.com/wp-content/uploads/2024/05/Best-Time-To-Go-To-Positano-Italy-scaled.jpg" alt = "Positano, Italy"></img>
</div>
<div id = "venice-div">
            <h2>Venice</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id = "venice-image-1" src = "https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2023/02/Venice-Verona-Lake-Garda-Countryside-5-Day-Tour-Package_1.jpg?fit=2500%2C1668&ssl=1" alt = "Venice canal picture"></img>
</div>
<div id = "monaco-div">
            <h2>Monaco</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>

<img id = "monaco-image-1" src = "https://www.officeescapeartist.com/wp-content/uploads/2021/11/Monte-Carlo-Casino-Monaco.jpg" alt = "monecarlo casino picture"></img>
</div>
<div>
            <h2>Nice</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>London</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Dublin</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>
<div>
            <h2>Amsterdam</h2>
            <p>Lorem ipsum dolor sit amet, reque legendos perpetua pri et, eu vis hinc erant. Vim et minim electram. Ex eum facilisis vituperatoribus. Mea commune persequeris at, ius ne debet recusabo, latine forensibus est cu. Vim ad fierent gloriatur disputationi, facilisi mandamus ex pro. Partiendo delicatissimi sit ut, quo erat vocibus salutandi eu.

Eum et illum euripidis, in eros utroque mea, has et illum epicuri adversarium. Tollit recusabo prodesset ea pri, dicant officiis expetendis eos an. Deleniti erroribus maluisset vel no, ad duo nibh adipisci. Ius cu esse appellantur, error persecuti et vix. Ea eam natum persecuti, verterem mediocrem nam ea.

Melius definiebas incorrupte qui ex, sed ei error ornatus. In elit efficiantur cum. Consulatu signiferumque ne eam. Soluta scripta instructior no mel, ei nonumes dolorem suscipiantur pri, exerci contentiones nam te.

Vix ne dico magna, quo cu verear corrumpit, ut veritus moderatius cum. Vel cu zril consul, ea dictas appellantur has. Cum graecis corrumpit an. Sed ea ubique detraxit indoctum, duis integre mei et.

Nusquam mandamus sententiae per at, eos autem veritus laboramus ea. Cu omnes referrentur qui. Affert cetero vis in, eos nulla oblique admodum ad. Id voluptatum scribentur consectetuer est.</p>
</div>

        </div>
        </>
    )
}

export default Reviews
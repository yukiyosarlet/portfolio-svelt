      <div class="information">
            <div class="personal">
                <div class="titel">
                    <h2>Informatie</h2>
                </div>
                <div class="question">
                    Naam:
                </div>
                <div class="awnser">
                    Yukiyo
                </div>
                <div class="question">
                    Famillienaam:
                </div>
                <div class="awnser">
                    Sarlet
                </div>
                <div class="question">
                    Adres:
                </div>
                <div class="awnser">
                    <p>Beukendreef 7,</p>
                    <p>9690 kluisbergen</p>
                </div>
                <div class="question">
                    Opleiding:
                </div>
                <div class="awnser">
                    <p>Front and backend</p>
                    <p>Webdevelopment</p>
                </div>
            </div>
            <div class="socials">
                <div class="titel">
                    <h2>Gegevens</h2>
                </div>
                <div class="question">
                    Number:
                </div>
                <div class="awnser">
                    +32 470 86 91 76
                </div>
                <div class="question">
                    Email:
                </div>
                <div class="awnser">
                    yu.sarlet@gmail.com
                </div>
                <div class="question">
                    LinkedIn:
                </div>
                <div class="awnser">
                    <a href="https://www.linkedin.com/in/yukiyo-sarlet-483477311/">
                        LinkedIn Yukiyo Sarlet</a>
                </div>
                <div class="question">
                    Github:
                </div>
                <div class="awnser">
                    <a href="  https://github.com/yukiyosarlet">
                        Github Yukiyo Sarlet</a>

                </div>
            </div>
            <div class="language">
                <div class="titel">
                    <h2>Talen</h2>
                </div>
                <div class="taal">
                    Nederlands (moedertaal)
                </div>
                <div class="taal">
                    Engels (vloeiend)
                </div>
                <div class="taal">
                    Frans (basis)
                </div>
            </div>
            <div class="hobbies">
                <div class="titel">
                    <h2>Hobbies</h2>
                </div>
                <div class="hobby">
                    fitness
                </div>
                <div class="hobby">
                    gamen
                </div>
                <div class="hobby">
                    zwemmen
                </div>
                <div class="hobby">
                    zeilen
                </div>
                <div class="hobby">
                    duiken
                </div>
            </div>
            <div class="skills">
                <div class="titel">
                    <h2>Skills</h2>
                </div>
                <div class="skill">
                    HTML
                </div>
                <div class="skill">
                    Javascript
                </div>
                <div class="skill">
                    Scss/css
                </div>
                <div class="skill">
                    PHP
                </div>
                <div class="skill">
                    API
                </div>
                <div class="skill">
                    SQL
                </div>
                <div class="skill">
                    Svelte
                </div>
                <div class="skill">
                    Photoshop
                </div>
                <div class="skill">
                    Illustrator
                </div>
                 <div class="skill">
                    Laravel
                </div>
                 <div class="skill">
                    Vue
                </div>
            </div>

            <div class="opleiding">
                <div class="titel">
                    <h2>Opleiding</h2>
                </div>
                <div class="datum">
                    sep 2016 - jun 2019
                </div>
                <div class="omschrijving">
                    <p>Atheneum Avelgem</p>
                    <p> Sociaal technische wetenschappen</p>
                </div>
                <div class="datum">
                    Feb 2022- heden
                </div>
                <div class="omschrijving">
                    <p> Howest; Kortrijk</p>
                    <p>front and backend web development</p>
                </div>
            </div>

            <div class="ervaring">
                <div class="titel">
                    <h2>ervaring</h2>
                </div>
                <div class="datum">
                    1/juli - 19/ juli 2024
                </div>
                <div class="omschrijving">
                    DLC System integration
                    <p>1.5 week als instalateur</p>
                    <p>1.5 week als programmeur</p>
                </div>
            </div>

            <div class="motivatie">
                <div class="titel">
                    <h2>Motivatie</h2>
                </div>
                <div class="omschrijving">
                    <p>Klaar om een nieuw hoofdstuk in te slaan.</p>
                    <p>Ik sta zeker open om extra cursussen/avondlessen te volgen om mijn skills uit te <br>
                        breiden naar wat het bedrijf nodig heeft.</p>
                    <p>Open voor alle feedback.</p>
                    <p>Open voor brede waaier van taken. Interesse in programmatie en techniek.</p>
                    <p>Zeer hands-on mentaliteit. Spontaan en sociaal karakter. <br>
                    Goede team spirit: ik kan zelfstandig werken maar werk prima samen in een team.</p>
                </div>
            </div>
        </div>


        <style lang="scss">
            a{
                text-decoration: none;
                color: green;
            }
            .information {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;

	.personal {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.socials {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.language {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.hobbies {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-areas: "titel titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.skills {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.opleiding {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
	.ervaring {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: "titel titel";
		gap: 1rem;
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
    	.motivatie {
		border: green solid 5px;
		border-radius: 5px;
		padding: 1rem;
	}
}

.titel {
	grid-area: titel;
}
.awnser {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.taal {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.hobby {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.skill {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.datum {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 0;
	animation: typing 2s steps(20, end) forwards;
}
.omschrijving {
	overflow: hidden;
	white-space: nowrap;
	font-size: 1.25rem;
	width: 100%;
	animation: typing 2s steps(20, end) forwards;
}

@media (max-width: 1203px) {
	.omschrijving {
		overflow: hidden;
		white-space: wrap;
		font-size: 1.25rem;
		width: 100%;
		animation: typing 2s steps(20, end) forwards;
	}
}

@media (max-width: 768px) {
	.information {
		grid-template-columns: 1fr;
	}
	.omschrijving {
		overflow: hidden;
		white-space: nowrap;
		font-size: 1.25rem;
		width: 100%;
		animation: typing 2s steps(20, end) forwards;
	}
}

@keyframes typing {
	from {
		width: 0;
	}
	to {
		width: 100%;
	}
}

</style>
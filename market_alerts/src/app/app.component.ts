import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Import header component
import { MarketAlertsComponent } from './market-alerts/market-alerts.component';
import { NewsHeadlinesComponent } from './news-headlines/news-headlines.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Mark AppComponent as standalone
  imports: [
    HeaderComponent,
    MarketAlertsComponent,
    NewsHeadlinesComponent,
    PredictionsComponent,
    FooterComponent
  ]
})
export class AppComponent {}
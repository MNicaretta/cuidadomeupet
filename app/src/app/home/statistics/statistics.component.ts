import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { StatisticsCategory } from 'src/app/core/models/statistics-category';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  chartType: ChartType = 'bar';
  chartLegend = true;

  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];

  statistics: StatisticsCategory[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.statistics = this.activatedRoute.snapshot.data['statistics'];

      if (this.statistics) {
        for (const category of this.statistics) {
          console.log(category);
          const data: number[] = [];

          if (category.datas) {
            for (const d of category.datas) {
              if (!this.chartLabels.includes(d.label)) {
                this.chartLabels.push(d.label);
              }

              data.push(d.value);
            }
          }

          this.chartData.push({
            label: category.label,
            data: data,
          });
        }
      }
    });
  }
}

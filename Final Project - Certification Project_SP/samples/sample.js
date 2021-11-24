using System;
using System.Web.Mvc;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using FusionCharts.Visualization;
using FusionCharts.DataEngine;
using System.Data;
namespace FusionChartsSamples
{
	public class HomeController : Controller
	{
		
		public ActionResult Index()
		{				
			DataTable ChartData = new DataTable();
			ChartData.Columns.Add("Programming Language", typeof(System.String));
			ChartData.Columns.Add("Users", typeof(System.Double));
			ChartData.Rows.Add("Java",62000);
			ChartData.Rows.Add("Python",46000);
			ChartData.Rows.Add("Javascript",38000);
			ChartData.Rows.Add("C++",31000);
			ChartData.Rows.Add("C#",27000);
			ChartData.Rows.Add("PHP",14000);
			ChartData.Rows.Add("Perl",14000);
			// Create static source with this data table
            StaticSource source = new StaticSource(ChartData);
            // Create instance of DataModel class
            DataModel model = new DataModel();
            // Add DataSource to the DataModel
            model.DataSources.Add(source);
            // Instantiate Pie Chart
            Charts.PieChart pie = new Charts.PieChart("pie_chart");
            // Set Chart's width and height
            pie.Width.Pixel(500);
            pie.Height.Pixel(400);
            // Set DataModel instance as the data source of the chart
            pie.Data.Source = model;
            // Set Chart Title
            pie.Caption.Text = "Most popular programming language";
            //set chart sub title
            pie.SubCaption.Text = "2017-2018";
            pie.ThemeName = FusionChartsTheme.ThemeName.FUSION;
            
            ViewData["Chart"] = pie.Render();
            return View();
		}

		
	}
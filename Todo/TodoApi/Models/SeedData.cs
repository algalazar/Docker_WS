using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace TodoApi.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new TodoContext(serviceProvider.GetRequiredService<DbContextOptions<TodoContext>>()))
            {
                if (context.TodoItems.Any())
                {
                    return;
                }

                context.TodoItems.Add(
                    new TodoItem
                    {
                        Name = "Create Dockerfile",
                        IsComplete = false
                    }
                );

                context.SaveChanges();
            }
        }
    }
}
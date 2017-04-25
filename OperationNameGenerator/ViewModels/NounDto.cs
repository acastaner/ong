using System;

namespace OperationNameGenerator.ViewModels
{
    public class NounDto
    {
        public Guid Id { get;set; }
        public string Value { get; set; }
    }

    public class NounReadDto
    {
        public string Value {get;set;}
    }
}
